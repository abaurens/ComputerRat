import * as THREE from 'three';

export const SPRITE_SIZE = 50;

export class Sprite {
	constructor(texture) {
		this.spriteMaterial = new THREE.SpriteMaterial({ map: texture });
		this.sprite = new THREE.Sprite(this.spriteMaterial);

		this.sprite.scale.set(SPRITE_SIZE, SPRITE_SIZE, 1);

		this.x = 0;
		this.y = 0;
	}

	setPosition(x, y) {
		this.x = x;
		this.y = y;
		this.sprite.position.set(x * SPRITE_SIZE, y * SPRITE_SIZE, 0);
	}

	getSprite() {
		return this.sprite;
	}
}
