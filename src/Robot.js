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

const energyMax = 10;

export class Robot extends Sprite {
	constructor(direction = DIRECTIONS[SOUTH]) {
		super(ROBOT);

		this.energyBar = document.querySelector("#energy-bar");
		this.setEnergy(energyMax);

		this.material.transparent = true;

		this.setDirection(direction);
		this.defaultDir = direction;
		this.defaultPos = this.pos;
	}

	update() {
		this.energy--;
		this.setPos(this.pos.x + this.dir.vec.x, this.pos.y + this.dir.vec.y);

		this.energyBar.value = this.energy * (100 / energyMax);
	}

	setDirection(direction) {
		this.dir = direction;
		this.material.rotation = direction.ang;
	}

	turnRight() {
		this.setDirection(DIRECTIONS[(this.dir.id + 1) % 4]);
	}

	turnBack() {
		this.setDirection(DIRECTIONS[(this.dir.id + 2) % 4]);
	}

	turnLeft() {
		this.setDirection(DIRECTIONS[(this.dir.id + 3) % 4]);
	}

	setDefault() {
		this.defaultPos = new THREE.Vector2(this.pos.x, this.pos.y);
		this.defaultDir = this.dir;
	}

	charge(energy) {
		this.setEnergy(this.energy + energy);
	}

	chargeMax() {
		this.setEnergy(energyMax);
	}

	setEnergy(energy) {
		if(energy < 0)
			energy = 0;
		this.energy = (energy > energyMax) ? energyMax : energy;

		this.energyBar.value = this.energy * (100 / energyMax);
	}

	isAlive() { return this.energy >= 0; }

	reset() {
		this.setPos(this.defaultPos.x, this.defaultPos.y);
		this.setDirection(this.defaultDir);

		this.setEnergy(energyMax);
	}
}
