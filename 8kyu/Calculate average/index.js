function findAverage(array) {
	return array.length && array.reduce((acc, num) => acc + num, 0) / array.length
}

console.log(findAverage([]))
console.log(findAverage([1, 2, 3, 4]))
