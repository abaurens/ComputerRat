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

let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2(0, 0);

window.addEventListener('mousemove', (event) => {
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}, false);

let hover	= new SPRITE.Sprite(TEXTURE.HOVER);
hover.material.transparent = true;
hover.material.opacity = 0.15;
scene.add(hover);


let animate = function () {
	requestAnimationFrame(animate);
	
	// Updates
	map.update();
	hover.position.set(0, 0, 2);
	
	// Raycaster
	raycaster.setFromCamera(mouse, camera);
	let intersects = raycaster.intersectObjects(map.children);
	
	intersects.forEach(tile => {
		if (tile.object.isEditable())
		{
			//tile.object.material.color.set(0xAAAAAA);
			hover.position.set(tile.object.position.x, tile.object.position.y, 0);
		}
	});
	
	renderer.render(scene, camera);
};

animate();