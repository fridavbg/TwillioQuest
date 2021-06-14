class TargetingSolution {
	constructor(config) {
		this.config = config;
	}
	target() {
		return `(${this.config.x}, ${this.config.y}, ${this.config.z})`;
	}
}

const m = new TargetingSolution({
	x: 10,
	y: 15,
	z: 900,
});

console.log(m.target()); // would print "(10, 15, 900)"
