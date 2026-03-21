function fiveLine(s) {
	let res = ''
	const str = s.trim()

	for (let i = 1; i <= 5; i++) {
		res += str.repeat(i)
		if (i !== 5) res += '\n'
	}

	return res
}

console.log(fiveLine('  a'))
