import * as THREE from 'three';

import * as MAP from './Map';
import { Robot } from './Robot';
import { Stack } from './Stack';
import { ToolBox } from './ToolBox';

const levels = ["01", "02", "03", "04"];

const tutos = [{
	map : "t1",
	msg : "Click on play button and watch the robot go to the end !",
	canRetry : false,
	canEdit : false
}, {
	map : "t2",
	msg : "Sometimes the robot will need some help !",
	canRetry : false,
	canEdit : false
}, {
	map : "t3",
	msg : "The blue go back tile made the robot turn back ! Try to reproduce what you saw !",
	canRetry : true,
	canEdit : true
}, {
	map : "t4",
	msg : "The robot will meet some colored gate and paint bucket. If the first stacked color is not the same, you die !",
	canRetry : false,
	canEdit : false
}, {
	map : "t5",
	msg : "If the color is the same, the robot will pass !",
	canRetry : false,
	canEdit : false
}, {
	map : "t6",
	msg : "The robot will perform operations on 2 last stacked colors !",
	canRetry : false,
	canEdit : false
}, {
	map : "t7",
	msg : "Just like arrows, You can add them on the map !",
	canRetry : true,
	canEdit : true
}, {
	map : "t8",
	msg : "Test the swap, it swap 2 last stacked colors !",
	canRetry : true,
	canEdit : true
}, {
	map : "t9",
	msg : "Be carefull not to get out of power !",
	canRetry : true,
	canEdit : true
}, {
	map : "t10",
	msg : "Maybe this plug will help you ?",
	canRetry : true,
	canEdit : true
}];

export class GameScene extends THREE.Scene {
	constructor(camera, renderer, mouse, abortCallback, victoryCallback, endCallback) {
		super();

		this.state = 0;
		this.level = 0;
		this.tick = 0;
		this.isTuto = true;
		this.canRetry = false;

		this.map = null;
		this.loadMap();

		this.stack = new Stack(this);
		this.add(this.stack);

		
		this.toolbox = new ToolBox(camera, renderer, this, mouse);
		this.add(this.toolbox);
		
		this.abortCallback = abortCallback;
		this.victoryCallback = victoryCallback;
		this.endCallback = endCallback;
	}

	update(mouse) {
		this.map.update(mouse);
	}

	triggerAbort(allert = true) {
		if (allert)
		{
			alert("You die!");
			let passNine = (this.isTuto && this.level == 9
							&& this.map.getRobot().energy < 0); //validate tuto 09 if dead by power loss
			if ((!this.canRetry || passNine) && !this.loadMap())
			{
				this.state = 2;
				this.endCallback();
			}
		}

		this.tick = 0;
		this.state = 0;
		this.abortCallback();
	}

	triggerVictory() {
		this.tick = 0;
		this.state = 0;
		this.victoryCallback();

		if (!this.loadMap())
		{
			this.state = 2;
			this.endCallback();
		}
	}

	getMap() { return this.map; }

	loadMap() {
		let level = "";
		let canEdit = true;
		document.querySelector("#flash").innerHTML = "";

		if (this.isTuto && this.level < tutos.length)
		{
			let tuto = tutos[this.level++];
			level = tuto.map;
			this.canRetry = tuto.canRetry;
			canEdit = tuto.canEdit;

			document.querySelector("#flash").innerHTML = tuto.msg;
		}
		else
		{
			if (this.isTuto)
			{
				this.level = 0;
				this.isTuto = false;
				this.canRetry = true;
				alert("Well done ! You have finished the tutorial !");
			}
			if (this.level >= levels.length)
				return false;
			level = levels[this.level++];
		}
		
		// Last map succeeded
		if (this.map)
			this.remove(this.map);
		this.map = MAP.loadMap(level, canEdit);
		this.add(this.map);

		this.map.getRobot().chargeMax();

		if (this.stack)
		{
			this.stack.flush();
			this.stack.update();
		}

		if (this.toolbox)
		{
			this.toolbox.update();
		}

		this.tick = 0;

		return true;
	}

	getRobot() { return this.map.getRobot(); }

	getStack() { return this.stack; }

	runSimulation() { this.state = 1; }
	stopSimulation() { this.state = 0; }
	isRunning() { return this.state === 1; }

	getLevel() { return levels[this.level]; }

	switchTick() { this.tick ^= 1; }
	getTick() { return this.tick; }

	getToolbox() { return this.toolbox; }
}