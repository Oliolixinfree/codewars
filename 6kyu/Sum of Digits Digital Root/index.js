function digitalRoot(n) {
	let digits = [...String(n)].map(Number)

	while (digits.length > 1) {
		const sum = digits.reduce((a, b) => a + b, 0)

		digits = [...String(sum)].map(Number)
	}

	return digits[0]
}

console.log(digitalRoot(16))
console.log(digitalRoot(456))
