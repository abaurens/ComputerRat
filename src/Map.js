import * as THREE from 'three';

import { Sprite, getTexture } from './Sprite';

const PLUG_TEXTURE = getTexture("plug.png");

export class Map {
	constructor() {
		this.table = [];

		this.node = new THREE.Object3D();

		for(let i = -10; i < 10; i++)
		{
			for(let j = -10; j < 10; j++)
			{
				let sprite = new Sprite(PLUG_TEXTURE);
				sprite.setPosition(i, j);
				this.table.push(sprite);

				this.node.add(sprite.getSprite());
			}
		}
	}

	getNode() {
		return this.node;
	}
}