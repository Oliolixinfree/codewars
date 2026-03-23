function abbrevName(name) {
	return name
		.split(' ')
		.map(el => el.at(0))
		.join('.')
		.toUpperCase()
}

console.log(abbrevName('Sam Harris'))
