import * as THREE from 'three';

import * as MAP from './Map';
import { Robot } from './Robot';

const levels = ["01", "02"];

export class GameScene extends THREE.Scene{
	constructor(abortCallback, victoryCallback) {
		super();

		this.state = 0;
		this.level = 0;

		this.robot = new Robot();
		this.add(this.robot);

		this.map = null;
		
		this.abortCallback = abortCallback;
		this.victoryCallback = victoryCallback;
	}

	triggerAbort() {
		this.state = 0;
		this.abortCallback();
	}

	triggerVictory() {
		this.state = 0;
		this.victoryCallback();

		this.loadMap();
	}

	getMap() { return this.map; }

	loadMap(robot) {
		if(this.map)
			this.remove(this.map);
		this.map = MAP.loadMap(levels[this.level++], this.robot);
		this.add(this.map);
	}

	getRobot() { return this.robot; }

	runSimulation() { this.state = 1; }
	stopSimulation() { this.state = 0; }
	isRunning() { return this.state === 1; }

	getLevel() { return levels[this.level]; }
}