function queueTime(customers, n) {
	if (!customers.length) return 0
	if (n === 1) return customers.reduce((a, b) => a + b)

	const tills = Array(n).fill(0)

	customers.forEach(element => {
		const minTime = Math.min(...tills)
		const tillIndex = tills.indexOf(minTime)
		tills[tillIndex] += element
	})

	return Math.max(...tills)
}

console.log(queueTime([], 1))
console.log(queueTime([1, 2, 3, 4], 1))
console.log(queueTime([2, 2, 3, 3, 4, 4], 2))
console.log(queueTime([1, 2, 3, 4, 5], 100))
