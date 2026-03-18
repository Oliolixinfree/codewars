function findShort(s) {
	return s
		.split(' ')
		.map(i => i.length)
		.sort((a, b) => a - b)[0]
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'))
