import * as THREE from 'three';
import { TILE_SIZE } from './Tile'

export class Sprite extends THREE.Sprite {
	constructor(texture) {
		super(new THREE.SpriteMaterial({ map: texture }));
		this.scale.set(TILE_SIZE, TILE_SIZE, 1);
	}
}
