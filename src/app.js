import * as THREE from 'three';
import * as TILE from './Tile'

import { ToolBox } from './ToolBox';
import { GameScene } from './GameScene';
import { Robot } from './Robot';

let timer;
let startButton = document.querySelector("#start")

let camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -1, 2);
let renderer = new THREE.WebGLRenderer();
let mouse = new THREE.Vector2(0, 0);

let scene = new GameScene(() => {
	clearInterval(timer);

	scene.getMap().unlock();

	scene.getRobot().reset();
	scene.getStack().flush();

	startButton.classList.add('btn-start');
	startButton.classList.remove('btn-stop');
	startButton.innerHTML = "Start Simulation";
}, () => {
	clearInterval(timer);

	alert("C'est gagné");

	startButton.classList.add('btn-start');
	startButton.classList.remove('btn-stop');
	startButton.innerHTML = "Start Simulation";
}, () => {
	startButton.disabled = true;

	alert("Tu as fini le jeu ! Félicitation !")
});

let toolbox = new ToolBox(camera, renderer, scene, mouse);

scene.add(toolbox);

window.addEventListener('mousemove', (event) => {
	mouse.x = Math.round(event.clientX - window.innerWidth / 2);
	mouse.y = Math.round(-event.clientY + window.innerHeight / 2);
}, false);

window.addEventListener('mousedown', (event) => {
	let hovered = scene.getMap().getHovered(mouse);

	if(!scene.getMap().isLocked() && hovered !== null && hovered.tile.isEditable())
		scene.getMap().setTile(hovered.x, hovered.y, new TILE.Slot());
});

startButton.addEventListener('click', (event) => {
	if (!scene.isRunning()) {
		scene.runSimulation();
		scene.getMap().lock();

		timer = setInterval(() => {
			let hovered = scene.getMap().getHovered(scene.getRobot().position);

			if(!hovered)
			{
				scene.triggerAbort();
				return;
			}

			if(hovered.tile.onRobotHover(scene))
			{
				scene.getRobot().update();

				hovered = scene.getMap().getHovered(scene.getRobot().position);

				if(!hovered)
				{
					scene.triggerAbort();
					return;
				}

				hovered.tile.onRobotEnter(scene);
			}
			
			if(!scene.getRobot().isAlive())
				scene.triggerAbort();
		}, 1000 / 2);

		startButton.classList.add('btn-stop');
		startButton.classList.remove('btn-start');
		startButton.innerHTML = "Stop Simulation";
	}
	else if (scene.isRunning()) {
		scene.triggerAbort();
	}
});

// Render
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let animate = function () {
	requestAnimationFrame(animate);

	scene.update(mouse);

	renderer.render(scene, camera);
};

animate();