import * as THREE from 'three';
import DragControls from 'three-dragcontrols';

import * as TOOLS from './Tools';
import { TILE } from './texture';
import { TILE_SIZE } from './Tile';

export class ToolBox extends THREE.Object3D {
	constructor(camera, renderer, state, mouse) {
		super();

		this.tools = [];

		this.addTool(new TOOLS.TurnLeft());
		this.addTool(new TOOLS.TurnRight());
		this.addTool(new TOOLS.HalfTurn());

		let controls = new DragControls(this.tools, camera, renderer.domElement);

		this.state = state;
		this.mouse = mouse;

		controls.addEventListener('dragstart', this.onToolDrag);
		controls.addEventListener('dragend', (event) =>{
			let tool = event.object;
			let map = this.state.getMap();
			
			tool.setPos(tool.getAnchor().x, tool.getAnchor().y);
	
			let hovered = map.getHovered(mouse);
	
			if(!map.isLocked() && hovered !== null && hovered.tile.isEditable())
				map.setTile(hovered.x, hovered.y, tool.getTileInstance());
		});
	}

	addTool(tool)
	{
		let i = this.tools.length;

		if(this.tools[i])
			this.remove(this.tools[i]);
		
		this.tools[i] = tool;

		let x = (window.innerWidth / (2 * TILE_SIZE)) - (3 + ((i % 3) * 2));
		let y = (window.innerHeight / (2 * TILE_SIZE)) - (6 + (Math.floor(i / 3) * 2));

		this.tools[i].setPos(x, y);
		this.add(this.tools[i]);
	}

	onToolDrag(event) {

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