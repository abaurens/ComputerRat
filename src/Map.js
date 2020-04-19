import * as THREE from 'three';
import * as TILE from './Tile';
import * as SPRITE from './Sprite';
import * as TEXTURE from './texture'
import { Robot, DIRECTIONS } from './Robot'

const tilesMap = {
	"P": TILE.Plug,
	"S": TILE.Slot,
	" ": TILE.Lava,
	"E": TILE.Exit,
	"#": TILE.Ground,
	"R": TILE.PaintRed,
	"G": TILE.PaintGreen,
	"B": TILE.PaintBlue
}

export class Map extends THREE.Object3D {
	constructor(width, height) {
		super();
		this.table = new Array(height);
		this.size = new THREE.Vector2(width, height);

		this.locked = false;

		this.position.set(0, 0, -1);

		for (let y = 0; y < height; ++y) {
			this.table[y] = new Array(width);
			for (let x = 0; x < width; ++x) {
				this.table[y][x] = null;
				this.setTile(x, y, new TILE.Tile());
			}
		}

		this.hover = new SPRITE.Sprite(TEXTURE.HOVER);
		this.hover.material.transparent = true;
		this.hover.material.opacity = 0.2;
		this.hover.material.color.set(0xFFFF88);

		this.add(this.hover);

		this.robot = new Robot();
		this.robot.material.color.set(0xff8888);

		this.robotTransform = new THREE.Object3D();
		this.robot.setPos(0, 0, 1);

		this.add(this.robotTransform);
		this.robotTransform.add(this.robot);
		
		this.offset = new THREE.Vector2(
			(TILE.TILE_SIZE / 2) * !(this.size.width % 2),
			(TILE.TILE_SIZE / 2) * !(this.size.height % 2));
		this.robotTransform.position.set(this.offset.x, this.offset.y, 0);
	}

	update(mouse) {
		this.hover.position.set(0, 0, -2);
		let hovered = this.getHovered(mouse);
		if (!this.isLocked() && hovered && hovered.tile.isEditable())
			this.hover.position.set(hovered.tile.position.x, hovered.tile.position.y, 1);
	}

	setTile(x, y, tile) {
		if (this.table[y][x])
			this.remove(this.table[y][x]);
		this.table[y][x] = tile;
		this.table[y][x].setPos(x - (this.size.width / 2), y - (this.size.height / 2));
		this.add(this.table[y][x]);
	}

	getHovered(mouse)
	{
		let boundW = TILE.TILE_SIZE * this.size.width;
		let boundH = TILE.TILE_SIZE * this.size.height;

		let txx = mouse.x + (boundW / 2);
		let tyy = mouse.y + (boundH / 2);
		if (txx < 0 || txx >= boundW || tyy < 0 || tyy >= boundH)
			return null;

		let tx = Math.floor(txx / TILE.TILE_SIZE);
		let ty = Math.floor(tyy / TILE.TILE_SIZE);
		return { x : tx, y : ty, tile : this.table[ty][tx] };
	}

	getRobot() {
		return (this.robot);
	}

	getTile(x, y)
	{
		if (x < 0 || y < 0 || x >= this.size.width || y > this.size.height)
			return null;
		return (this.table[y][x]);
	}

	lock() { this.locked = true; }
	unlock() { this.locked = false; }
	isLocked() { return this.locked ; }


	toMapCoord(x, y) {
		let res = new THREE.Vector2(0, 0);
	
		let boundW = TILE.TILE_SIZE * this.size.width;
		let boundH = TILE.TILE_SIZE * this.size.height;
	
		let txx = x + (boundW / 2);
		let tyy = y + (boundH / 2);
	
		res.x = Math.floor(txx / TILE.TILE_SIZE);
		res.y = Math.floor(tyy / TILE.TILE_SIZE);
		return (res);
	}
	
	toWorldCoord(x, y) {
		y = (this.size.height - (y + 1));
		let boundW = TILE.TILE_SIZE * this.size.width;
		let boundH = TILE.TILE_SIZE * this.size.height;
		let res = new THREE.Vector2(0, 0);
	
		res.x = (x * TILE.TILE_SIZE) - boundW / 2;
		res.y = (y * TILE.TILE_SIZE) - boundH / 2;
		return (res);
	}
}

const dirs = "nesw";
const colors = "01234567";

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
				map.getRobot().setPos(x - Math.floor(width / 2), height - (y + 1) - Math.floor(height / 2), 1);
				map.getRobot().setDirection(DIRECTIONS[dirs.indexOf(mapString[x + y * width])]);
				map.getRobot().setDefault();
			}
			else if (colors.includes(mapString[x + y * width]))
			{
				let value = parseInt(mapString[x + y * width]);

				let r = (value >> 2) & 0x01;
				let g = (value >> 1) & 0x01;
				let b = (value >> 0) & 0x01;

				let color = (r) ? 0x0000FF : 0x00;
				color |= (g) ? 0x00FF00  : 0x00;
				color |= (b) ? 0xFF0000  : 0x00;

				map.setTile(x, height - (y + 1), new TILE.Conditional(color));
			}
			else
				map.setTile(x, height - (y + 1), new tilesMap[mapString[x + y * width]]);
		}
	}
	return map;
}