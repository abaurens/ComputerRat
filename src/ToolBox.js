import * as THREE from 'three';
import DragControls from 'three-dragcontrols';

import * as TOOLS from './Tools';
import { TILE_SIZE } from './Tile';

export class ToolBox extends THREE.Object3D {
	constructor(camera, renderer, state, mouse) {
		super();

		this.tools = [];

		this.addTool(new TOOLS.TurnLeft());
		this.addTool(new TOOLS.TurnRight());
		this.addTool(new TOOLS.HalfTurn());
		this.addTool(new TOOLS.Swap());
		this.addTool(new TOOLS.Add());
		this.addTool(new TOOLS.Sub());

		let controls = new DragControls(this.tools, camera, renderer.domElement);

		this.state = state;
		this.mouse = mouse;

		controls.addEventListener('dragstart', () => {});
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

		let x = (window.innerWidth / (2 * TILE_SIZE)) - (3 + ((i % 3) * 1.2));
		let y = (window.innerHeight / (2 * TILE_SIZE)) - (6 + (Math.floor(i / 3) * 1.2));

		this.tools[i].setPos(x, y);
		this.add(this.tools[i]);
	}
}
