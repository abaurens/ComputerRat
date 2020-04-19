import * as MAP from './Map';
import { Robot, SOUTH } from './Robot';

const levels = ["01", "02"];

export class GameState {
	constructor(scene, abortCallback, victoryCallback) {
		if(!scene)
			throw "Scene not defined";
		
		this.state = 0;
		this.level = 0;

		this.scene = scene;
		this.robot = new Robot();

		this.scene.add(this.robot);

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
			this.scene.remove(this.map);
		this.map = MAP.loadMap(levels[this.level++], this.robot);
		this.scene.add(this.map);
	}

	getScene() { return this.scene; }
	setScene(scene) { this.scene = scene; }

	getRobot() { return this.robot; }
	//setRobot(robot) { this.robot = robot; }

	runSimulation() { this.state = 1; }
	stopSimulation() { this.state = 0; }
	isRunning() { return this.state === 1; }

	getLevel() { return levels[this.level]; }
}