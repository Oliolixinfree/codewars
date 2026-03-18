function squareSum(numbers) {
	// return numbers.reduce((a, b) => a + Math.pow(b, 2), 0)
	// or
	return numbers.reduce((a, b) => a + b ** 2, 0)
}

console.log(squareSum([0, 3, 4, 5]))
