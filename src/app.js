import * as THREE from 'three';
import * as MAP from './Map';
import * as TILE from './Tile'
import * as SPRITE from './Sprite'
import * as TEXTURE from './texture'

import { ToolBox } from './ToolBox';
import { Robot } from './Robot';

let scene = new THREE.Scene();
let camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -1, 1);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


let mouse = new THREE.Vector2(0, 0);

window.addEventListener('mousemove', (event) => {
	mouse.x = Math.round(event.clientX - window.innerWidth / 2);
	mouse.y = Math.round(-event.clientY + window.innerHeight / 2);
}, false);


let map = MAP.loadMap('02');
map.position.set(0, 0, -1);
scene.add(map);

let toolbox = new ToolBox(camera, renderer, map, mouse);
scene.add(toolbox);


let hover	= new SPRITE.Sprite(TEXTURE.HOVER);
hover.material.transparent = true;
hover.material.opacity = 0.2;
hover.material.color.set(0xFFFF88)
scene.add(hover);

let robot = new Robot("w");
robot.setPos(0, 0);
scene.add(robot);

// Updates
let timer = setInterval(() => {
	robot.update();
}, 1000 / 1);

let animate = function () {
	requestAnimationFrame(animate);

	hover.position.set(0, 0, -2);
	let hovered = map.getHovered(mouse);
	if (hovered && hovered.tile.isEditable())
		hover.position.set(hovered.tile.position.x, hovered.tile.position.y, -1);
	
	renderer.render(scene, camera);
};

animate();