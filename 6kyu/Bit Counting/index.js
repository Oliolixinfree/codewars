function countBits(n) {
	return [...n.toString(2)].map(Number).filter(i => i === 1).length
}

console.log(countBits(7))
