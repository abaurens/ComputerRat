import * as THREE from 'three';
import { Sprite } from './Sprite';
import { ROBOT } from './texture';

export const SPRITE_SIZE = 50;

export const NORTH = 'n';
export const SOUTH = 's';
export const EAST = 'e';
export const WEST = 'w';

export class Robot extends Sprite {
	constructor(direction) {
		super(ROBOT);

		this.material.transparent = true;

		this.direction = direction;
	}

	update() {
		switch(this.direction)
		{
			case NORTH:
				this.pos.y++;
				this.material.rotation = 0;
				break;
			case EAST:
				this.pos.x++;
				this.material.rotation = -Math.PI / 2;
				break;
			case SOUTH:
				this.pos.y--;
				this.material.rotation = Math.PI;
				break;
			case WEST:
				this.pos.x--;
				this.material.rotation = Math.PI / 2;
				break;
			default:
				throw "Not allowed direction";
		}

		this.setPos(this.pos.x, this.pos.y);
	}
}
