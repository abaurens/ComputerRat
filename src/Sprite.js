import * as THREE from 'three';

export const SPRITE_SIZE = 50;

export class Sprite extends THREE.Sprite{
	constructor(texture) {
		super(new THREE.SpriteMaterial({ map: texture }));

		this.scale.set(SPRITE_SIZE, SPRITE_SIZE, 1);

		this.pos = new THREE.Vector2(0, 0);
	}

	setPos(x, y) {
		this.pos.set(x,y);
		this.position.set(x * SPRITE_SIZE, y * SPRITE_SIZE, 0);
	}

	getPos() { return this.pos; }
}
