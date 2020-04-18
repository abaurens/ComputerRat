import * as THREE from 'three';
import { Sprite } from './Sprite';
import { ROBOT } from './texture';

export const SPRITE_SIZE = 50;

export const NORTH	= 0;
export const EAST	= 1;
export const SOUTH	= 2;
export const WEST	= 3;

export const DIRECTIONS = [
	{ id: NORTH,	vec: new THREE.Vector2(0, 1),	ang: 0},
	{ id: EAST,		vec: new THREE.Vector2(1, 0),	ang: -Math.PI / 2},
	{ id: SOUTH,	vec: new THREE.Vector2(0, -1),	ang: Math.PI},
	{ id: WEST,		vec: new THREE.Vector2(-1, 0),	ang: Math.PI / 2}
];

export class Robot extends Sprite {
	constructor(direction) {
		super(ROBOT);

		this.material.transparent = true;

		this.setDirection(direction);
	}

	update() {
		this.setPos(this.pos.x + this.direction.vec.x, this.pos.y + this.direction.vec.y);
	}

	setDirection(direction) {
		this.direction = direction;
		this.material.rotation = direction.ang;
	}

	turnRight() {
		this.setDirection(DIRECTIONS[(this.direction.id + 1) % 4]);
	}

	turnBack() {
		this.setDirection(DIRECTIONS[(this.direction.id + 2) % 4]);
	}

	turnLeft() {
		this.setDirection(DIRECTIONS[(this.direction.id + 3) % 4]);
	}	
}
