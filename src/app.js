import * as THREE from 'three';
import * as MAP from './Map';
import * as TILE from './Tile'
import * as SPRITE from './Sprite'
import * as TEXTURE from './texture'

import { ToolBox } from './ToolBox';
import { Robot, DIRECTIONS } from './Robot';

let scene = new THREE.Scene();
let camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -1, 2);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


let mouse = new THREE.Vector2(0, 0);

window.addEventListener('mousemove', (event) => {
	mouse.x = Math.round(event.clientX - window.innerWidth / 2);
	mouse.y = Math.round(-event.clientY + window.innerHeight / 2);
}, false);

let robot = new Robot(DIRECTIONS[1]);
robot.setPos(0, 0);

let map = MAP.loadMap('02', robot);
map.position.set(0, 0, -2);

let toolbox = new ToolBox(camera, renderer, map, mouse);

let hover = new SPRITE.Sprite(TEXTURE.HOVER);
hover.material.transparent = true;
hover.material.opacity = 0.2;
hover.material.color.set(0xFFFF88)

scene.add(map);
scene.add(hover);
scene.add(robot);
scene.add(toolbox);

// Updates
let startButton = document.querySelector("#start")

let timer;
let state = 0;

window.addEventListener('mousedown', (event) => {
	let hovered = map.getHovered(mouse);

	if(!map.isLocked() && hovered !== null && hovered.tile.isEditable())
		map.setTile(hovered.x, hovered.y, new TILE.Slot());
});

startButton.addEventListener('click', (event) => {

	if (state === 0) {
		state = 1;
		map.lock();

		timer = setInterval(() => {
			let hovered = map.getHovered(robot.position);

			if(!hovered)
			{
				abortSimulation();
				return;
			}

			hovered.tile.onRobotHover(robot);
			
			robot.update();
		}, 1000 / 2);

		startButton.classList.add('btn-stop');
		startButton.classList.remove('btn-start');
		startButton.innerHTML = "Stop Simulation";
	}
	else if (state === 1) {
		abortSimulation();
	}
});

function abortSimulation() {
	state = 0;
	map.unlock();

	clearInterval(timer);
	robot.reset();

	startButton.classList.add('btn-start');
	startButton.classList.remove('btn-stop');
	startButton.innerHTML = "Start Simulation";
}

let animate = function () {
	requestAnimationFrame(animate);

	hover.position.set(0, 0, -3);
	let hovered = map.getHovered(mouse);
	if (!map.isLocked() && hovered && hovered.tile.isEditable())
		hover.position.set(hovered.tile.position.x, hovered.tile.position.y, -1);

	renderer.render(scene, camera);
};

animate();