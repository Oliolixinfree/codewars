function getCount(str) {
	const chars = ['a', 'e', 'i', 'o', 'u']
	let counter = 0

	for (const element of str) {
		if (chars.includes(element)) counter++
	}

	return counter
}

// or

const getCount = str => str.split('').filter(c => 'aeiou'.includes(c)).length

console.log(getCount('abracadabra'))
