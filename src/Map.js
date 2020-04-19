import * as THREE from 'three';
import * as TILE from './Tile';
import { Robot, DIRECTIONS } from './Robot'
import * as SPRITE from './Sprite';
import * as TEXTURE from './texture'

const tilesMap = {
	"P": TILE.Plug,
	"S": TILE.Slot,
	" ": TILE.Lava,
	"E": TILE.Exit,
	"#": TILE.Ground
}

export class Map extends THREE.Object3D {
	constructor(width, height) {
		super();
		this.table = new Array(height);
		this.size = new THREE.Vector2(width, height);

		this.locked = false;

		this.position.set(0, 0, -2);

		for (let y = 0; y < height; ++y) {
			this.table[y] = new Array(width);
			for (let x = 0; x < width; ++x) {
				this.table[y][x] = new TILE.Tile();
				this.table[y][x].setPos((x - width / 2), (y - height / 2), 0);
				this.add(this.table[y][x]);
			}
		}

		this.hover = new SPRITE.Sprite(TEXTURE.HOVER);
		this.hover.material.transparent = true;
		this.hover.material.opacity = 0.2;
		this.hover.material.color.set(0xFFFF88);

		this.add(this.hover);
	}

	update(mouse) {
		this.hover.position.set(0, 0, -2);
		let hovered = this.getHovered(mouse);
		if (!this.isLocked() && hovered && hovered.tile.isEditable())
			this.hover.position.set(hovered.tile.position.x, hovered.tile.position.y, 1);
	}

	setTile(x, y, tile) {
		this.remove(this.table[y][x]);
		this.table[y][x] = tile;
		this.table[y][x].setPos((x - this.size.width / 2.0), (y - this.size.height / 2));
		this.add(this.table[y][x]);
	}

	getHovered(mouse)
	{
		let boundW = TILE.TILE_SIZE * this.size.width / 2;
		let boundH = TILE.TILE_SIZE * this.size.height / 2;

		if (mouse.x < -boundW || mouse.x >= boundW || mouse.y <= -boundH || mouse.y > boundH)
			return null;
		let tx = Math.round(mouse.x / TILE.TILE_SIZE) + Math.floor(this.size.width / 2);
		let ty = Math.round(mouse.y / TILE.TILE_SIZE) + Math.floor(this.size.height / 2);
		return { x : tx, y : ty, tile : this.table[ty][tx] };
	}

	lock() { this.locked = true; }
	unlock() { this.locked = false; }
	isLocked() { return this.locked ; }
}


const dirs = "nesw";

export function loadMap(mapName, robot) {
	if(!mapName)
		return null;
	
	let mapString = require(`../maps/${mapName}.txt`);
	let size = mapString.length + (mapString[mapString.length - 1] !== "\n");
	let width = mapString.indexOf('\n');
	let height = size / (width + 1);

	mapString = mapString.replace(/\r?\n|\r/gm, "");
	size -= height;

	let map = new Map(width, height);

	for (let y = 0; y < height; ++y) {
		for (let x = 0; x < width; x++) {
			if (dirs.includes(mapString[x + y * width]))
			{
				map.setTile(x, height - (y + 1), new TILE.Ground());
				robot.setDirection(DIRECTIONS[dirs.indexOf(mapString[x + y * width])]);
				robot.setPos(x - Math.floor(width / 2), height - (y + 1) - Math.floor(height / 2));
				robot.setDefault();
			}
			else
				map.setTile(x, height - (y + 1), new tilesMap[mapString[x + y * width]]);
		}
	}
	return map;
}