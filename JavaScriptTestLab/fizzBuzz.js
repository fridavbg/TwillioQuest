const numberInput = process.argv[2];

if ((numberInput % 3 === 0) & (numberInput % 5 === 0)) {
	console.log("JavaScript");
}
if ((numberInput % 3 === 0) & (numberInput % 5 !== 0)) {
	console.log("Java");
}
if ((numberInput % 5 === 0) & (numberInput % 3 !== 0)) {
	console.log("Script");
}
if ((numberInput % 3 !== 0) & (numberInput % 5 !== 0)) {
	console.log(numberInput);
}
