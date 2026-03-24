function predictAge(...args) {
	return Math.floor(
		Math.sqrt([...args].map(i => i * i).reduce((acc, num) => acc + num, 0)) / 2
	)
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45))
