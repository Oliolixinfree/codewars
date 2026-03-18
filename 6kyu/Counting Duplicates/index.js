function duplicateCount(text) {
	const counts = {}
	let result = 0

	for (let char of text) {
		char = char.toLowerCase()
		counts[char] = (counts[char] || 0) + 1
	}

	for (const key in counts) {
		if (counts[key] > 1) result++
	}

	return result
}

// or

function duplicateCount(text) {
	const counts = {}

	for (let char of text) {
		char = char.toLowerCase()
		counts[char] = (counts[char] || 0) + 1
	}

	return Object.values(counts).filter(v => v > 1).length
}

console.log(duplicateCount('aabbcde'))
