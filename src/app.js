import * as THREE from 'three'

import { Map } from './Map';

let scene = new THREE.Scene();
let camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -1, 1);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let map = new Map();
scene.add(map.getNode());

let animate = function () {
	requestAnimationFrame(animate);

	renderer.render(scene, camera);
};

animate();