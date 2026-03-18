function findMissingLetter(array) {
	for (let i = 0; i < array.length - 1; i++) {
		const currentCode = array[i].charCodeAt()
		const nextCode = array[i + 1].charCodeAt()

		if (nextCode - currentCode > 1) {
			return String.fromCharCode(currentCode + 1)
		}
	}
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']))
console.log(findMissingLetter(['O', 'Q', 'R', 'S']))
