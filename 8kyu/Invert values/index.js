function invert(array) {
	if (!array.length) return []

	return array.map(i => (i > 0 ? -i : Math.abs(i)))
}

//or
const invert = array => array.map(num => -num)

or //
function invert(array) {
	return array.map(el => -el)
}

console.log(invert([1, -2, 3, -4, 5]))
