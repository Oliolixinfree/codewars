function sum(numbers) {
	return numbers.reduce((acc, number) => acc + number, 0)
}

console.log(sum([]))
console.log(sum([1, 5.2, 4, 0, -1]))
