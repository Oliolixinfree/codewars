function findEvenIndex(arr) {
	let counter = 0
	let leftSide = 0
	let rightSide = arr.reduce((acc, num) => acc + num, counter + 1)

	if (leftSide === rightSide) return counter - 1

	while (leftSide !== rightSide) {
		counter++
		leftSide = arr.slice(0, counter - 1).reduce((acc, num) => acc + num, 0)
		rightSide = arr.slice(counter).reduce((acc, num) => acc + num, 0)

		if (counter > arr.length) return -1
		if (leftSide === rightSide) return counter - 1
	}
}

// optimized solution
function findEvenIndex(arr) {
	let totalSum = arr.reduce((sum, num) => sum + num, 0)
	let leftSum = 0

	for (let i = 0; i < arr.length; i++) {
		let rightSum = totalSum - leftSum - arr[i]

		if (leftSum === rightSum) {
			return i
		}

		leftSum += arr[i]
	}

	return -1
}
