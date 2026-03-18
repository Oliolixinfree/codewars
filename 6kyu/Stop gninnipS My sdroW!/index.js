function spinWords(string) {
	return string
		.split(' ')
		.map(i => (i.length >= 5 ? i.split('').reverse().join('') : i))
		.join(' ')
}

console.log(spinWords('Hey fellow warriors'))
