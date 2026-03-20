function persistence(num) {
	let count = 0
	let current = num

	while (current >= 10) {
		current = Array.from(String(current), Number).reduce(
			(acc, digit) => acc * digit
		)

		count++
	}

	return count
}

console.log(persistence(999))
