function deleteNth(arr, n) {
	const result = []
	const counts = {}

	for (const value of arr) {
		if ((counts[value] || 0) < n) {
			result.push(value)
			counts[value] = (counts[value] || 0) + 1
			console.log(counts)
		}
	}

	return result
}

// or

function deleteNth(arr, n) {
	const counts = {}
	return arr.filter(value => (counts[value] = (counts[value] || 0) + 1) <= n)
}

console.log(deleteNth([20, 37, 20, 21], 1))
