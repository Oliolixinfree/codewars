function digPow(n, p) {
	const sum = Array.from(String(n), Number).reduce(
		(acc, num, idx) => acc + num ** (p + idx),
		0
	)

	return sum % n === 0 ? sum / n : -1
}

console.log(digPow(46288, 3))
