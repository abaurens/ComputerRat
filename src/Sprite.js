import * as THREE from 'three';

export class Sprite {
	constructor(texture) {
		this.spriteMap = new THREE.TextureLoader().load(texture);
		this.spriteMap.magFilter = THREE.NearestFilter;
		this.spriteMap.minFilter = THREE.NearestFilter;
		this.spriteMaterial = new THREE.SpriteMaterial({ map: this.spriteMap });
		this.sprite = new THREE.Sprite(this.spriteMaterial);
	}

	getSprite() {
		return this.sprite;
	}
}