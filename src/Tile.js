import * as THREE from 'three'
import * as TEX from "./texture"

export const TILE_SIZE = 50;

export class Tile extends THREE.Sprite {
	constructor(texture) {
		super(new THREE.SpriteMaterial({ map: texture ? texture : TEX.TILE}));
		this.scale.set(TILE_SIZE, TILE_SIZE, 1);
		this.editable = false;
	}

	setPos(x, y) {
		this.position.set(x * TILE_SIZE + TILE_SIZE / 2, y * TILE_SIZE + TILE_SIZE / 2, 0);
	}

	getPos() { return this.pos; }

	isEditable() { return this.editable; }
}

export class Ground extends Tile
{
	constructor() {
		super();
	}
}

export class Plug extends Tile
{
	constructor() {
		super(TEX.PLUG);
	}
}

export class Slot extends Tile
{
	constructor() {
		super(TEX.SLOT);
		this.editable = true;
	}
}

export class Lava extends Tile
{
	constructor() {
		super(TEX.LAVA);
	}
}