import * as THREE from 'three';

export const PLUG = getTexture("plug.png");
export const TILE = getTexture("tile.png");
export const SLOT = getTexture("slot.png");
export const LAVA = getTexture("lava.png");
export const FLAG = getTexture("flag.png");
export const HOVER = getTexture("white.png");
export const BATTERY = getTexture("battery.png");
export const WHITE_TILE = getTexture("white_tile.png");


export const PAINT_RED = getTexture("paint_red.png");
export const PAINT_GREEN = getTexture("paint_green.png");
export const PAINT_BLUE = getTexture("paint_blue.png");

export const ROBOT = getTexture("pyramid_head.png");

export const STACK_CONTAINER = getTexture("stack_container.png");

//	TOOLS_TILES
export const TURN_BACK = getTexture("turn_back.png");
export const TURN_TRIG = getTexture("turn_t.png");
export const TURN_HORA = getTexture("turn_h.png");
export const SWAP = getTexture("swap.png");
export const ADD = getTexture("add.png");
export const SUB = getTexture("sub.png");

//	TOOLS
export const TURN_BACK_TOOL = getTexture("tool_turn_back.png");
export const TURN_TRIG_TOOL = getTexture("tool_turn_t.png");
export const TURN_HORA_TOOL = getTexture("tool_turn_h.png");
export const SWAP_TOOL = getTexture("tool_swap.png");
export const ADD_TOOL = getTexture("tool_add.png");
export const SUB_TOOL = getTexture("tool_sub.png");

export const STACK_BG = getTexture("stack_bg.png");
export const TOOLBOX_BG = getTexture("toolbox_bg.png");

export function getTexture(path) {
	let tex = new THREE.TextureLoader().load(path);
	tex.magFilter = THREE.NearestFilter;
	tex.minFilter = THREE.NearestFilter;

	return tex;
}
