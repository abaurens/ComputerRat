export class GameState {
	constructor(abortCallback, victoryCallback) {
		this.state = 0;
		
		this.abortCallback = abortCallback;
		this.victoryCallback = victoryCallback;
	}

	triggerAbort() {
		this.abortCallback();
	}

	triggerVictory() {
		this.victoryCallback();
	}

	setState(state) { this.state = state; }
	getState() { return this.state; }
}