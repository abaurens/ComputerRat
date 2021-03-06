import * as THREE from 'three'
import * as TEX from "./texture"
import * as TILE from "./Tile"

export const TOOL_SIZE = 64;

export class Tool extends THREE.Sprite {
	constructor(texture, tileClass) {
		super(new THREE.SpriteMaterial({ map: texture ? texture : TEX.TILE}));
		this.scale.set(TOOL_SIZE, TOOL_SIZE, 1);

		this.anchor = THREE.Vector2(0, 0);
		this.tileClass = tileClass;
	}

	setPos(x, y) {
		this.position.set(x * TOOL_SIZE + TOOL_SIZE / 2, y * TOOL_SIZE + TOOL_SIZE / 2, 0);
		this.anchor = new THREE.Vector2(x, y);
	}

	getAnchor() { return this.anchor; }
	
	getTileInstance() { return new this.tileClass(); }
}

export class TurnRight extends Tool
{
	constructor() {
		super(TEX.TURN_HORA_TOOL, TILE.TurnHoraire);
	}
}

export class TurnLeft extends Tool
{
	constructor() {
		super(TEX.TURN_TRIG_TOOL, TILE.TurnTrigo);
	}
}

export class HalfTurn extends Tool
{
	constructor() {
		super(TEX.TURN_BACK_TOOL, TILE.TurnBack);
	}
}

export class Swap extends Tool
{
	constructor() {
		super(TEX.SWAP_TOOL, TILE.Swap);
	}
}

export class Add extends Tool
{
	constructor() {
		super(TEX.ADD_TOOL, TILE.Add);
	}
}

export class Sub extends Tool
{
	constructor() {
		super(TEX.SUB_TOOL, TILE.Sub);
	}
}