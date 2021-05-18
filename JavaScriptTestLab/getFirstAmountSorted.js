function getFirstAmountSorted(inputArray, numberOfItems) {
	// Step 1: sort inputArray alphabetically
	inputArray.sort((a, b) => (a === b ? 0 : a < b ? -1 : 1));
	// console.log(inputArray);

	// Step 2: create an array which contains the first N items of the sorted array - the number of items is provided in the numberOfItems variable
	let newArray = inputArray.slice(0, numberOfItems);

	// Step 3: return the new array you created at step 2
	return newArray;
}

// The lines of code below test your function when you execute your code in the terminal - they are not required for your function to work
const newArray = getFirstAmountSorted(["cat", "apple", "bat"], 2);
console.log(newArray);
// << should print out ['apple', 'bat']
