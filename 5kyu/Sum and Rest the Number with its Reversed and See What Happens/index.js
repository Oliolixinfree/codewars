// variant 1 2541ms
const numbers = {
	1: 45,
	2: 54,
	3: 495,
	4: 594
}

function sumDifRev(n) {
	if (n in numbers) {
		return numbers[n]
	}

	let currentNum = Object.values(numbers).at(-1) + 1

	while (Object.keys(numbers).length < n) {
		if (!String(currentNum).endsWith('0')) {
			const reversedNum = Number(
				String(currentNum).split('').reverse().join('')
			)
			const sum = currentNum + reversedNum
			const diff = Math.abs(currentNum - reversedNum)

			if (sum % diff === 0) {
				const nextKey = Object.keys(numbers).length + 1
				numbers[nextKey] = currentNum
			}
		}
		currentNum++
	}

	return numbers[n]
}

// 2 variand is better

// variant 2 1578ms
const cache = [45, 54, 495, 594]

function sumDifRev(n) {
	if (n <= cache.length) {
		return cache[n - 1]
	}

	let currentNum = cache[cache.length - 1] + 1

	while (cache.length < n) {
		if (!String(currentNum).endsWith('0')) {
			const reversedNum = Number(
				String(currentNum).split('').reverse().join('')
			)
			const sum = currentNum + reversedNum
			const diff = Math.abs(currentNum - reversedNum)

			if (sum % diff === 0) {
				cache.push(currentNum)
			}
		}
		currentNum++
	}

	return cache[n - 1]
}

// console.log(sumDifRev(1))
console.log(sumDifRev(5))
