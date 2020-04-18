import * as THREE from 'three';
import * as TILE from './Tile';


const tilesMap = {
	"P": TILE.Plug,
	"#": TILE.Ground,
}

export class Map extends THREE.Object3D {
	constructor(width, height) {
		super();
		this.table = new Array(height);
		this.size = new THREE.Vector2(width, height);

		for (let y = 0; y < height; ++y)
		{
			this.table[y] = new Array(width);
			for (let x = 0; x < width; ++x)
			{
				this.table[y][x] = new TILE.Tile();
				this.table[y][x].setPos((y - height / 2), (x - width / 2));
				this.add(this.table[y][x]);
			}
		}
	}

	setTile(x, y, tile)
	{
		this.remove(this.table[y][x]);
		this.table[y][x] = tile;
		this.table[y][x].setPos((x - this.size.width / 2.0), (y - this.size.height / 2));
		this.add(this.table[y][x]);
	}

}

export function loadMap(mapName)
{
	let mapString = require(`../maps/${mapName}.txt`);
	let size = mapString.length + (mapString[mapString.length - 1] !== "\n");
	let width = mapString.indexOf('\n');
	let height = size / (width + 1);

	mapString = mapString.replace(/\r?\n|\r/gm, "");
	size -= height;

	console.log(mapString, size, width, height);

	let map = new Map(width, height);

	for (let y = 0; y < height; ++y)
	{
		for (let x = 0; x < width; x++)
		{
			//console.log(x, y);
			map.setTile(x, y, new tilesMap[mapString[x + y * width]]);
		}
	}
	return map;
}