import * as THREE from 'three'

var scene = new THREE.Scene();
//var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -1, 1);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var spriteMap = new THREE.TextureLoader().load("plug.png");
var geometry = new THREE.BoxGeometry({ map: spriteMap });
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
cube.position.set(100, 100, 0);
cube.scale.set(100, 100, 1);
scene.add(cube);


var spriteMaterial = new THREE.SpriteMaterial({ map: spriteMap });
var sprite = new THREE.Sprite(spriteMaterial);
sprite.position.set(0, 0, 0);
sprite.scale.set(200, 200, 1);
scene.add(sprite);

var animate = function () {
	requestAnimationFrame(animate);

	renderer.render(scene, camera);
};

animate();