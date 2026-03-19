function filter_list(l) {
	return l.filter(i => typeof i === 'number')
}

const num = 1

console.log(filter_list([1, 2, 'a', 'b']))
