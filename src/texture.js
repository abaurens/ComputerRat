import * as THREE from 'three';

export const PLUG = getTexture("plug.png");
export const TILE = getTexture("tile.png");
export const SLOT = getTexture("slot.png");
export const LAVA = getTexture("lava.png");
export const HOVER = getTexture("white.png");

export function getTexture(path) {
	let tex = new THREE.TextureLoader().load(path);
	tex.magFilter = THREE.NearestFilter;
	tex.minFilter = THREE.NearestFilter;

	return tex;
}