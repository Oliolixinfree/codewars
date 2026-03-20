function getAverage(marks) {
	return Math.floor(marks.reduce((acc, mark) => acc + mark) / marks.length)
}

console.log(getAverage([1, 2, 3, 4, 5]))
