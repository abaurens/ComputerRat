import * as THREE from 'three'
import * as TEX from "./texture"

export const TOOL_SIZE = 50;

export class Tool extends THREE.Sprite {
	constructor(texture) {
		super(new THREE.SpriteMaterial({ map: texture ? texture : TEX.TILE_TEXTURE}));
		this.scale.set(TOOL_SIZE, TOOL_SIZE, 1);
	}

	setPos(x, y) {
		this.position.set(x * TOOL_SIZE + TOOL_SIZE / 2, y * TOOL_SIZE + TOOL_SIZE / 2, 0);
	}

	getPos() { return this.pos; }
}

export class GoRight extends Tool
{
	constructor() {
		super(TEX.PLUG_TEXTURE);
	}
}

export class GoLeft extends Tool
{
	constructor() {
		super(TEX.PLUG_TEXTURE);
	}
}

export class GoUp extends Tool
{
	constructor() {
		super(TEX.PLUG_TEXTURE);
	}
}

export class GoDown extends Tool
{
	constructor() {
		super(TEX.PLUG_TEXTURE);
	}
}