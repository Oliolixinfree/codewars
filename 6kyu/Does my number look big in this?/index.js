function narcissistic(value) {
	return (
		Array.from(String(value), Number).reduce(
			(acc, num, _, arr) => acc + num ** arr.length,
			0
		) === value
	)
}

console.log(narcissistic(153))
console.log(narcissistic(1652))
