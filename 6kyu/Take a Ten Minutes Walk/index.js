function isValidWalk(walk) {
	if (walk.length !== 10) return false

	const counts = {}

	for (let w of walk) {
		counts[w] = (counts[w] || 0) + 1
	}

	return (
		(counts['n'] || 0) === (counts['s'] || 0) &&
		(counts['w'] || 0) === (counts['e'] || 0)
	)
}

console.log(
	isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])
)
console.log(isValidWalk(['n']))
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))
