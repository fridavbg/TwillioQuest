class Ducktypium {
	constructor(color) {
		this.allowedColor = ["red", "blue", "yellow"];
		if (!this.allowedColor.includes(color)) {
			throw new Error("That color is not allowed");
		} else {
			this.color = color;
		}
		this.calibrationSequence = [];
	}
	refract(input) {
		this.allowedColor = ["red", "blue", "yellow"];
		if (!this.allowedColor.includes(input)) {
			throw new Error("That color is not allowed");
		} else {
			this.input = input;
		}
		switch (input) {
			case "red":
				if (this.color === "red") {
					return "red";
				} else {
					console.log("Error");
				}
				if (this.color === "blue") {
					return "purple";
				}
				if (this.color === "yellow") {
					return "orange";
				}
				break;
			case "blue":
				if (this.color === "red") {
					return "purple";
				}
				if (this.color === "blue") {
					return "blue";
				}
				if (this.color === "yellow") {
					return "green";
				}
				break;
			case "yellow":
				if (this.color === "red") {
					return "orange";
				}
				if (this.color === "blue") {
					return "green";
				}
				if (this.color === "yellow") {
					return "yellow";
				}
				break;
		}
	}
	calibrate(input) {
		this.input = input.sort();
		this.input.map((num) => {
			this.calibrationSequence.push(num * 3);
		});
		return this.calibrationSequence;
	}
}
// The following would produce an error
try {
	const badColor = new Ducktypium("pink");
} catch (e) {
	console.log("Color must be red, yellow, or blue!");
}

const dt = new Ducktypium("red");

console.log(dt.color); // prints 'red'

console.log(dt.refract("blue")); // prints 'purple'
console.log(dt.refract("red")); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]
