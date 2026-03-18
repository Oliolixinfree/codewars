function array(string) {
	if (string.length === 0 || string.length === 1 || string.length === 2)
		return null

	let res

	res = string.split(',')
	res.pop()
	res.shift()

	if (res.length === 0) {
		return null
	} else {
		return res.join(' ')
	}
}

console.log(array('A1,B2,C3,D4,E5'))
