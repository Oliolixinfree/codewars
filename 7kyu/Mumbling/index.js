function accum(s) {
	return [...s]
		.map((char, idx) =>
			char.charAt(0) === char.toUpperCase()
				? char[0] + char.repeat(idx).toLowerCase()
				: char[0].toUpperCase() + char.repeat(idx)
		)
		.join('-')
}

// or

function accum(s) {
	return [...s]
		.map((char, idx) => char.toUpperCase() + char.toLowerCase().repeat(idx))
		.join('-')
}

console.log(accum('abcd'))
console.log(accum('RqaEzty'))
