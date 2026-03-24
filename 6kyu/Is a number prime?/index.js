function isPrime(num) {
	if (num < 2) return false
	if (num === 2) return true
	if (num % 2 === 0) return false

	for (let j = 3; j <= Math.sqrt(num); j += 2) {
		if (num % j === 0) return false
	}
	return true
}
