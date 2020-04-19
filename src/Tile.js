import * as THREE from 'three'
import * as TEX from "./texture"

export const TILE_SIZE = 64;
export const HALF_TILE = (TILE_SIZE / 2);

export class Tile extends THREE.Sprite {
	constructor(texture) {
		super(new THREE.SpriteMaterial({ map: texture ? texture : TEX.TILE}));
		this.scale.set(TILE_SIZE, TILE_SIZE, 1);
		this.editable = false;
	}

	setPos(x, y, z = 0) {
		this.position.set(x * TILE_SIZE + HALF_TILE, y * TILE_SIZE + HALF_TILE, z);
	}

	isEditable() { return this.editable; }

	onRobotEnter(state) { return true; }
	onRobotHover(state) { return true; }
	onRobotLeave(state) { return true; }
}

export class Ground extends Tile
{
	constructor() {
		super();
	}
}

export class Exit extends Tile
{
	constructor() {
		super(TEX.FLAG);
	}

	onRobotHover(state) {
		state.triggerVictory();
		return false;
	}
}

export class Plug extends Tile
{
	constructor() {
		super(TEX.PLUG);
	}

	onRobotHover(state) {
		state.getRobot().chargeMax();
		return true;
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

	onRobotHover(state) {
		state.triggerAbort();
		return false;
	}
}

export class TurnTrigo extends Tile
{
	constructor() {
		super(TEX.TURN_TRIG);
		this.editable = true;
	}

	onRobotHover(state) {
		state.getRobot().turnLeft();
		return true;
	}
}

export class TurnHoraire extends Tile
{
	constructor() {
		super(TEX.TURN_HORA);
		this.editable = true;
	}

	onRobotHover(state) {
		state.getRobot().turnRight();
		return true;
	}
}

export class TurnBack extends Tile
{
	constructor() {
		super(TEX.TURN_BACK);
		this.editable = true;
	}

	onRobotHover(state) {
		state.getRobot().turnBack();
		return true;
	}
}

class TilePaint extends Tile  {
	constructor(texture, color) {
		super(texture);
		this.color = color;
	}

	getColor() { return this.color; }

	onRobotEnter(state) {
		state.getStack().push(this.color);
		return true;
	}
}

export class PaintRed extends TilePaint {
	constructor() {
		super(TEX.PAINT_RED, 0xFF0000);
	}
}

export class PaintGreen extends TilePaint {
	constructor() {
		super(TEX.PAINT_GREEN, 0x00FF00);
	}
}

export class PaintBlue extends TilePaint {
	constructor() {
		super(TEX.PAINT_BLUE, 0x0000FF);
	}
}

export class Swap extends Tile {
	constructor() {
		super(TEX.SWAP, 0x0000FF);
		this.editable = true;
	}

	onRobotHover(state) {
		state.getStack().swap();
		return true;
	}
}

export class Add extends Tile {
	constructor() {
		super(TEX.ADD, 0x0000FF);
		this.editable = true;
	}

	onRobotHover(state) {
		state.getStack().doOp((a, b) => a + b);
		return true;
	}
}

export class Sub extends Tile {
	constructor() {
		super(TEX.SUB, 0x0000FF);
		this.editable = true;
	}

	onRobotHover(state) {
		state.getStack().doOp((a, b) => b - a);
		return true;
	}
}

export class Conditional extends Tile {
	constructor(color) {
		super(TEX.TILE);

		this.color = color;

		this.material.color.set(color);
	}

	onRobotHover(state) {
		let color = state.getStack().pop();

		if(this.color !== color)
		{
			state.triggerAbort();
			return false;
		}
		return true;
	}
}
