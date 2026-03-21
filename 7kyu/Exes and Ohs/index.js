function XO(str) {
	const arr = str.toLowerCase().split('')
	let xCounter = 0
	let yCounter = 0

	for (const el of arr) {
		el === 'x' && xCounter++
		el === 'o' && yCounter++
	}

	return xCounter === yCounter
}

// or

function XO(str) {
	return (
		str.toLowerCase().split('x').length === str.toLowerCase().split('o').length
	)
}

console.log(XO('xxOo'))
