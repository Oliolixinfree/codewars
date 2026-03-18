var number = function (busStops) {
	let total = 0

	busStops.map(i => {
		total += i[0] - i[1]
	})

	return total
}

console.log(
	number([
		[3, 0],
		[9, 1],
		[4, 10],
		[12, 2],
		[6, 1],
		[7, 10]
	])
)
