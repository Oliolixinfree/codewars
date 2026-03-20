const solution = str => {
	const result = []

	for (let i = 0; i < str.length; i += 2) {
		result.push(str.slice(i, i + 2).padEnd(2, '_'))
	}

	return result
}

console.log(solution('abc'))
console.log(solution('abcdef'))
console.log(solution(''))
