function uniqueInOrder(iterable) {
	return [...iterable].filter((char, idx, arr) => char !== arr[idx + 1])
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('ABBCcAD'))
