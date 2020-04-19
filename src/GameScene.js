import * as THREE from 'three';

import * as MAP from './Map';
import { Robot } from './Robot';
import { Stack } from './Stack';

const levels = ["01", "02", "03"];

export class GameScene extends THREE.Scene {
	constructor(abortCallback, victoryCallback, endCallback) {
		super();

		this.state = 0;
		this.level = 0;

		this.stack = new Stack();
		this.add(this.stack);

		this.map = null;
		this.loadMap();
		
		this.abortCallback = abortCallback;
		this.victoryCallback = victoryCallback;
		this.endCallback = endCallback;
	}

	update(mouse) {
		this.map.update(mouse);
	}

	triggerAbort() {
		this.state = 0;
		this.abortCallback();
	}

	triggerVictory() {
		this.state = 0;
		this.victoryCallback();

		if(!this.loadMap())
		{
			this.state = 2;
			this.endCallback();
		}
	}

	getMap() { return this.map; }

	loadMap() {
		// Last map succeeded
		if(this.level >= levels.length)
			return false;

		if(this.map)
			this.remove(this.map);
		this.map = MAP.loadMap(levels[this.level++]);
		this.add(this.map);

		this.map.getRobot().chargeMax();
		this.stack.flush();

		return true;
	}

	getRobot() { return this.map.getRobot(); }

	getStack() { return this.stack; }

	runSimulation() { this.state = 1; }
	stopSimulation() { this.state = 0; }
	isRunning() { return this.state === 1; }

	getLevel() { return levels[this.level]; }
}