import * as THREE from 'three'

import { Sprite } from './Sprite';

let scene = new THREE.Scene();
let camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -1, 1);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let sprite = new Sprite("plug.png").getSprite();
sprite.position.set(0, 0, 0);
sprite.scale.set(200, 200, 1);
scene.add(sprite);

let animate = function () {
	requestAnimationFrame(animate);

	renderer.render(scene, camera);
};

animate();