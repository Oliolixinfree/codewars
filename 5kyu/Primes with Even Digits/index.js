function isPrime(num) {
	if (num < 2) return false
	if (num === 2) return true
	if (num % 2 === 0) return false

	for (let j = 3; j <= Math.sqrt(num); j += 2) {
		if (num % j === 0) return false
	}
	return true
}

function f(n) {
	let max = -1
	let prime

	for (let i = n - 1; i >= 2; i--) {
		if (isPrime(i)) {
			const arr = [...String(i)]
			let counter = 0

			for (const element of arr) {
				if (Number(element) % 2 === 0) {
					counter++
				}
			}

			if (counter > max) {
				max = counter
				prime = i
			}
		}
	}
	return prime
}

console.log(f(1000))
