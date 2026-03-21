function order(words) {
	const arr = words.split(' ')
	const newLine = {}

	for (let i = 0; i < arr.length; i++) {
		newLine[arr[i].match(/\d+/g)] = arr[i]
	}

	return Object.values(newLine).join(' ')
}

// or

function order(words) {
	return words
		.split(' ')
		.sort((a, b) => a.match(/\d/) - b.match(/\d/))
		.join(' ')
}

console.log(order('is2 Thi1s T4est 3a'))
