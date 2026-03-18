function firstNonRepeatingLetter(s) {
	const counts = {}

	for (let char of s) {
		char = char.toLowerCase()
		counts[char] = (counts[char] || 0) + 1
	}

	const firstUnique = [...s].find(el => counts[el.toLowerCase()] === 1)
	return firstUnique !== undefined ? firstUnique : ''
}

console.log(firstNonRepeatingLetter('stress'))
console.log(firstNonRepeatingLetter('sTreSS'))
