import * as THREE from 'three';
import * as TILE from './Tile'
import * as SPRITE from './Sprite'
import * as TEXTURE from './texture'

import { ToolBox } from './ToolBox';
import { GameScene } from './GameScene';

let camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -1, 2);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


let mouse = new THREE.Vector2(0, 0);

let hover = new SPRITE.Sprite(TEXTURE.HOVER);
hover.material.transparent = true;
hover.material.opacity = 0.2;
hover.material.color.set(0xFFFF88)

// Updates
let timer;
let startButton = document.querySelector("#start")

let scene = new GameScene(() => {
	clearInterval(timer);

	scene.stopSimulation();
	scene.getMap().unlock();

	scene.getRobot().reset();

	startButton.classList.add('btn-start');
	startButton.classList.remove('btn-stop');
	startButton.innerHTML = "Start Simulation";
}, () => {
	clearInterval(timer);

	scene.stopSimulation();
	alert("C'est gagné");

	startButton.classList.add('btn-start');
	startButton.classList.remove('btn-stop');
	startButton.innerHTML = "Start Simulation";
});

scene.loadMap();

let toolbox = new ToolBox(camera, renderer, scene, mouse);

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
				scene.getRobot().update();
		}, 1000 / 2);

		startButton.classList.add('btn-stop');
		startButton.classList.remove('btn-start');
		startButton.innerHTML = "Stop Simulation";
	}
	else if (scene.isRunning()) {
		scene.triggerAbort();
	}
});

scene.add(hover);
scene.add(toolbox);

let animate = function () {
	requestAnimationFrame(animate);

	hover.position.set(0, 0, -3);
	let hovered = scene.getMap().getHovered(mouse);
	if (!scene.getMap().isLocked() && hovered && hovered.tile.isEditable())
		hover.position.set(hovered.tile.position.x, hovered.tile.position.y, -1);

	renderer.render(scene, camera);
};

animate();