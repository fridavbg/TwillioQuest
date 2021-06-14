function calculatePower(powerSettings) {
	let totalPower = powerSettings.map((num) => (num *= 2));
	totalPower = totalPower.reduce((acc, num) => (acc + num), 0);
	return totalPower;
}

const laserPower = calculatePower([1, 3, 8]);
console.log("Required laser power is " + laserPower); // should be 24
