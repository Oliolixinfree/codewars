function getSum(a, b) {
	return a !== b
		? ((Math.max(a, b) - Math.min(a, b) + 1) *
				(Math.min(a, b) + Math.max(a, b))) /
				2
		: a
}

console.log(getSum(5, -1))
console.log(getSum(0, -1))
console.log(getSum(2, 2))
