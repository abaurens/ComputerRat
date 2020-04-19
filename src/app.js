import * as THREE from 'three';
import * as TILE from './Tile'
import * as SPRITE from './Sprite'
import * as TEXTURE from './texture'

import { ToolBox } from './ToolBox';
import { GameState } from './GameState';

let scene = new THREE.Scene();
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

let state = new GameState(scene, () => {
	clearInterval(timer);

	state.stopSimulation();
	state.getMap().unlock();

	state.getRobot().reset();

	startButton.classList.add('btn-start');
	startButton.classList.remove('btn-stop');
	startButton.innerHTML = "Start Simulation";
}, () => {
	clearInterval(timer);

	state.stopSimulation();
	alert("C'est gagné");

	startButton.classList.add('btn-start');
	startButton.classList.remove('btn-stop');
	startButton.innerHTML = "Start Simulation";
});

state.setScene(scene);
state.loadMap();

let toolbox = new ToolBox(camera, renderer, state, mouse);

window.addEventListener('mousemove', (event) => {
	mouse.x = Math.round(event.clientX - window.innerWidth / 2);
	mouse.y = Math.round(-event.clientY + window.innerHeight / 2);
}, false);

window.addEventListener('mousedown', (event) => {
	let hovered = state.getMap().getHovered(mouse);

	if(!state.getMap().isLocked() && hovered !== null && hovered.tile.isEditable())
		state.getMap().setTile(hovered.x, hovered.y, new TILE.Slot());
});

startButton.addEventListener('click', (event) => {
	if (!state.isRunning()) {
		state.runSimulation();
		state.getMap().lock();

		timer = setInterval(() => {
			let hovered = state.getMap().getHovered(state.getRobot().position);

			if(!hovered)
			{
				state.triggerAbort();
				return;
			}

			if(hovered.tile.onRobotHover(state))
				state.getRobot().update();
		}, 1000 / 2);

		startButton.classList.add('btn-stop');
		startButton.classList.remove('btn-start');
		startButton.innerHTML = "Stop Simulation";
	}
	else if (state.isRunning()) {
		state.triggerAbort();
	}
});

scene.add(hover);
scene.add(toolbox);

let animate = function () {
	requestAnimationFrame(animate);

	hover.position.set(0, 0, -3);
	let hovered = state.getMap().getHovered(mouse);
	if (!state.getMap().isLocked() && hovered && hovered.tile.isEditable())
		hover.position.set(hovered.tile.position.x, hovered.tile.position.y, -1);

	renderer.render(scene, camera);
};

animate();