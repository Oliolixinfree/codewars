function encryptThis(text) {
	const words = text.split(' ')
	const msg = []

	for (const word of words) {
		if (word.length === 1) {
			msg.push(word.charCodeAt(0).toString())
			continue
		}

		const firstLetterCode = word.charCodeAt(0)
		const secondLetter = word[1]
		const lastLetter = word[word.length - 1]

		if (word.length === 2) {
			msg.push(firstLetterCode + lastLetter)
			continue
		}

		const middle = word.slice(2, -1)
		const encryptedWord = firstLetterCode + lastLetter + middle + secondLetter
		msg.push(encryptedWord)
	}

	return msg.join(' ')
}

// console.log(encryptThis('Hello'))
// console.log(encryptThis('good'))
console.log(encryptThis('hello world'))
