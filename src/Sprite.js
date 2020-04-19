import * as THREE from 'three';

export const SPRITE_SIZE = 64;

export class Sprite extends THREE.Sprite{
	constructor(texture, width = SPRITE_SIZE, height = SPRITE_SIZE) {
		super(new THREE.SpriteMaterial({ map: texture }));

		this.scale.set(width, height, 1);

		this.pos = new THREE.Vector2(0, 0);
	}

	setPos(x, y, z = 0) {
		this.pos.set(x,y);
		this.position.set(x * SPRITE_SIZE, y * SPRITE_SIZE, z);
	}

	getPos() { return this.pos; }
}
