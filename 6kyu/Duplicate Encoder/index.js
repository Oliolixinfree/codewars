function duplicateEncode(word) {
	const counts = {}

	for (let char of word) {
		char = char.toLowerCase()
		counts[char] = (counts[char] || 0) + 1
	}

	return [...word]
		.map(char => (counts[char.toLowerCase()] === 1 ? '(' : ')'))
		.join('')
}

console.log(duplicateEncode('Success'))
