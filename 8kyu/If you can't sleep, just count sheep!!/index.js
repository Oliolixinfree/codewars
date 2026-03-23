const countSheep = function (num) {
	if (num === 0) return ''

	const arr = []

	for (let i = 0; i < num; i++) {
		arr.push(`${i + 1} sheep...`)
	}

	return arr.join('')
}

console.log(countSheep(3))
