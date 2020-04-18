import * as THREE from 'three';
import * as MAP from './Map';
import * as TILE from './Tile'
import * as SPRITE from './Sprite'
import * as TEXTURE from './texture'

import { ToolBox } from './ToolBox';

let scene = new THREE.Scene();
let camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -1, 1);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let map = MAP.loadMap('02');
map.position.set(0, 0, -1);
scene.add(map);

let toolbox = new ToolBox(camera, renderer);
scene.add(toolbox);

let mouse = new THREE.Vector2(0, 0);

window.addEventListener('mousemove', (event) => {
	mouse.x = Math.round(event.clientX - window.innerWidth / 2);
	mouse.y = Math.round(-event.clientY + window.innerHeight / 2);
}, false);

let hover	= new SPRITE.Sprite(TEXTURE.HOVER);
hover.material.transparent = true;
hover.material.opacity = 0.15;
scene.add(hover);


let animate = function () {
	requestAnimationFrame(animate);
	
	// Updates

	hover.position.set(0, 0, -2);
	let tile = map.getHovered(mouse);
	if (tile && tile.isEditable())
		hover.position.set(tile.position.x, tile.position.y, -1);
	
	renderer.render(scene, camera);
};

animate();