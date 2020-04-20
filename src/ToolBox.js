import * as THREE from 'three';
import DragControls from 'three-dragcontrols';

import * as TOOLS from './Tools';
import { TILE_SIZE } from './Tile';
import { Sprite } from './Sprite';
import { TOOLBOX_BG } from './texture';

export class ToolBox extends THREE.Object3D {
	constructor(camera, renderer, state, mouse) {
		super();

		this.state = state;
		this.mouse = mouse;

		this.background = new Sprite(TOOLBOX_BG);
		this.background.scale.set(256, 256, 1);
		this.background.position.set((3 / 2) * TOOLS.TOOL_SIZE, 0, 0);
		this.add(this.background);

		this.tools = [];

		this.update();

		this.addTool(new TOOLS.TurnLeft());
		this.addTool(new TOOLS.TurnRight());
		this.addTool(new TOOLS.HalfTurn());
		this.addTool(new TOOLS.Swap());
		this.addTool(new TOOLS.Add());
		this.addTool(new TOOLS.Sub());

		let controls = new DragControls(this.tools, camera, renderer.domElement);

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

		let x = (i % 3);
		let y = - Math.floor(i / 3);

		this.tools[i].setPos(x, y);
		this.add(this.tools[i]);
	}

	update() {
		let mapSize = this.state.getMap().getSize();
		this.position.set((mapSize.x + 2) * TILE_SIZE / 2, 0, 0);
	}
}
