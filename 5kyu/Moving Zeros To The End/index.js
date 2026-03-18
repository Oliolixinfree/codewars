function moveZeros(arr) {
	return [...arr.filter(i => i !== 0), ...arr.filter(i => i === 0)]
}

// or

function moveZeros(arr) {
	const filtredArr = arr.filter(item => item !== 0)

	const counter = arr.length - filtredArr.length

	for (let i = 0; i < counter; i++) {
		filtredArr.push(0)
	}

	return filtredArr
}

// or

function moveZeros(arr) {
	const filtredArr = arr.filter(item => item !== 0)
	const zerosCount = arr.length - filtredArr.length

	return [...filtredArr, ...new Array(zerosCount).fill(0)]
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']))
