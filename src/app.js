import * as THREE from 'three';

import * as MAP from './Map';
import { Sprite } from './Sprite';

import { PLUG_TEXTURE } from './texture';
import { ToolBox } from './ToolBox';

let scene = new THREE.Scene();
let camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -1, 1);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let map = MAP.loadMap('02');
scene.add(map);

let toolbox = new ToolBox(camera, renderer);
scene.add(toolbox);

let animate = function () {
	requestAnimationFrame(animate);

	renderer.render(scene, camera);
};

animate();