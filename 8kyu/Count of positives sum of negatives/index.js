function countPositivesSumNegatives(input) {
	if (!input || !input.length) return []

	return input.reduce(
		(acc, num) => {
			if (num > 0) acc[0]++
			if (num < 0) acc[1] += num
			return acc
		},
		[0, 0]
	)
}

console.log(
	countPositivesSumNegatives([
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15
	])
)
console.log(countPositivesSumNegatives([]))
