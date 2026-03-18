function alphabetPosition(text) {
	return [...text]
		.filter(i => /[a-z]/i.test(i))
		.map(i => i.toLowerCase().charCodeAt() - 96)
		.join(' ')
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))
