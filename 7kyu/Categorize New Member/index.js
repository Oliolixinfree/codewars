function openOrSenior(data) {
	let output = []
	for (let index = 0; index < data.length; index++) {
		if (data[index][0] >= 55 && data[index][1] > 7) {
			output.push('Senior')
		} else {
			output.push('Open')
		}
	}

	return output
}

console.log(
	openOrSenior([
		[45, 12],
		[55, 21],
		[19, -2],
		[104, 20]
	])
)
