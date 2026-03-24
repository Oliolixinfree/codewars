function decipherThis(str) {
	const words = str.split(' ')
	const msg = []

	for (const word of words) {
		const firstLetter = String.fromCharCode(parseInt(word))
		const rest = word.replace(/^\d+/, '')

		if (rest.length >= 2) {
			const arr = rest.split('')
			const temp = arr[0]

			arr[0] = arr[arr.length - 1]
			arr[arr.length - 1] = temp

			msg.push(firstLetter + arr.join(''))
		} else {
			msg.push(firstLetter + rest)
		}
	}

	return msg.join(' ')
}

console.log(decipherThis('72olle 103doo 100ya'))
console.log(decipherThis('82yade 115te 103o'))
