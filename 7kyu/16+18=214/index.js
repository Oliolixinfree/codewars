function add(num1, num2) {
	num1 = [...String(num1)].map(Number)
	num2 = [...String(num2)].map(Number)

	const diff = num1.length - num2.length

	if (diff > 0) {
		num2.unshift(...Array(diff).fill(0))
	} else if (diff < 0) {
		num1.unshift(...Array(-diff).fill(0))
	}

	return Number(num1.map((i, idx) => i + num2[idx]).join(''))
}

console.log(add(16, 18))
console.log(add(122, 81))
