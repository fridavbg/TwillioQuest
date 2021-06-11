function scanAndFilter(freightItems, forbiddenString) {
	let filteredItems = freightItems.filter((item) => item !== forbiddenString);

	return filteredItems;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const filtered = scanAndFilter(
	["dog", "ray gun", "cat", "zippers", "ray gun"],
	"ray gun"
);
console.log("Filtered Items");
console.log(filtered); // should be ['dog', 'cat', 'zippers']
