function splitAndAdd(arr, n) {
	let result = [...arr]

	for (let i = 0; i < n; i++) {
		if (n === 0 || result.length === 1) break

		const mid = Math.floor(result.length / 2)
		const leftSide = result.slice(0, mid)
		const rightSide = result.slice(mid)

		if (leftSide.length < rightSide.length) {
			leftSide.unshift(0)
		}

		result = leftSide.map((num, i) => num + rightSide[i])
	}

	return result
}

console.log(splitAndAdd([1, 2, 3, 4, 5], 2))
