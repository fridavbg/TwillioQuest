function calculateMass(freightItems) {
	let totalMass = freightItems.reduce(
		(sum, current) => sum + current.length,
		0
	);
	return totalMass;
}

const mass = calculateMass(["dog", "donkey", "cat"]);
console.log("Total mass of items is " + mass); // should be 12
