import * as THREE from 'three';
import { Sprite } from './Sprite';
import { STACK_CONTAINER } from './texture';

const maxSize = 5;

export class Stack extends THREE.Object3D {
	constructor() {
		super();

		this.position.set(-window.innerWidth / 2 + 100, window.innerHeight / 2 - 150, 0);

		this.stack = [];
		this.stackSprites = [];
	}

	push(color) {
		this.stack.push(color);

		let container = new Sprite(STACK_CONTAINER);
		container.material.color.set(color);
		container.scale.set(100, 30, 1);
		container.setPos(0, this.stack.length - maxSize, 0);

		this.add(container);
		this.stackSprites.push(container);
	}

	pop() {
		let container = this.stackSprites.pop();
		this.remove(container);

		return this.stack.pop();
	}

	doOp(callback) {
		let a = this.pop();
		let b = this.pop();

		this.push(callback(a, b));
	}

	swap() {
		let a = this.pop();
		let b = this.pop();

		this.push(a);
		this.push(b);
	}

	flush() {
		this.stackSprites.forEach(stackSprite => this.remove(stackSprite));
		this.stackSprites = [];
		this.stack = [];
	}
}
