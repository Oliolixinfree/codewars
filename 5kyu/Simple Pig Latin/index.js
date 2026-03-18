function pigIt(str) {
	const excludeSymbols = ['!', '?', '.', ',']

	return str
		.split(' ')
		.map(word =>
			!excludeSymbols.includes(word) ? word.slice(1) + word[0] + 'ay' : word
		)
		.join(' ')
}
console.log(pigIt('Hello world !'))
