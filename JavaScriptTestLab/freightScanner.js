function scan(freightItems) {
	let contrabandCount = 0;
	for (let i = 0; i < freightItems.length; i++) {
		if (freightItems[i] === "contraband") {
			contrabandCount++;
		}
	}
	return contrabandCount;
}

const numItems = scan(["dog", "contraband", "cat", "zippers", "contraband"]);
console.log('Number of "contraband": ' + numItems); // should be 2
