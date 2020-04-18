import * as THREE from 'three'
import * as MAP from './Map';

let scene = new THREE.Scene();
let camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -1, 1);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let map = MAP.loadMap('01');
scene.add(map);

let animate = function () {
	requestAnimationFrame(animate);

	renderer.render(scene, camera);
};

animate();