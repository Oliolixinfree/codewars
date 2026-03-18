function sortArray(array) {
	if (array.length <= 1) array

	const oddNumbers = array.filter(num => num % 2 !== 0).sort((a, b) => a - b)

	let oddIndex = 0

	return array.map(i => {
		if (i % 2 !== 0) {
			return oddNumbers[oddIndex++]
		} else {
			return i
		}
	})
}

console.log(sortArray([5, 8, 6, 3, 4]))
