import * as THREE from 'three';
import { Sprite, SPRITE_SIZE } from './Sprite';
import { STACK_CONTAINER, STACK_BG, getTexture } from './texture';
import { TILE_SIZE } from './Tile';

const maxSize = 5;
const CONTAINER_WIDTH = 100;
const CONTAINER_HEIGHT = 30;
const CONTAINER_SPACE = 10;

export class Stack extends THREE.Object3D {
	constructor(state) {
		super();

		this.state = state;

		this.background = new Sprite(STACK_BG);
		this.background.scale.set(140, 320, 1);
		this.background.position.set(0, ((maxSize + 1) / 2) * (CONTAINER_HEIGHT + CONTAINER_SPACE), 0);
		this.add(this.background);

		this.cheatSheet = new Sprite(getTexture("color_cheat_sheet.png"))
		this.cheatSheet.position.set(-210, ((maxSize + 1) / 2) * (CONTAINER_HEIGHT + CONTAINER_SPACE), 0);
		this.cheatSheet.scale.set(256, 128, 1);

		this.add(this.cheatSheet);
		
		this.update();

		this.stack = [];
		this.stackSprites = [];
	}

	push(color) {
		if(this.stack.length >= maxSize)
		{
			alert("Stack Overflow");
			this.state.triggerAbort();
			return null;
		}

		this.stack.push(color);

		let container = new Sprite(STACK_CONTAINER);
		container.material.color.set(color);
		container.scale.set(CONTAINER_WIDTH, CONTAINER_HEIGHT, 1);
		container.position.set(0, this.stack.length * (CONTAINER_HEIGHT + CONTAINER_SPACE), 0);

		this.add(container);
		this.stackSprites.push(container);
	}

	pop() {
		if(this.stack.length <= 0)
		{
			alert("Stack Underflow");
			this.state.triggerAbort();
			return null;
		}

		let container = this.stackSprites.pop();
		this.remove(container);

		return this.stack.pop();
	}

	doOp(callback) {
		let a, b;
		
		if(!(a = this.pop()))
			return;
		if(!(b = this.pop()))
			return;

		this.push(callback(a, b));
	}

	swap() {
		let a, b;
		
		if(!(a = this.pop()))
			return;
		if(!(b = this.pop()))
			return;

		this.push(a);
		this.push(b);
	}

	flush() {
		this.stackSprites.forEach(stackSprite => this.remove(stackSprite));
		this.stackSprites = [];
		this.stack = [];
	}

	update() {
		let mapSize = this.state.getMap().getSize();
		this.position.set(-(mapSize.x + 3) * TILE_SIZE / 2, -((maxSize + 1) / 2) * (CONTAINER_HEIGHT + CONTAINER_SPACE), 0);
	}
}
