function printerError(s) {
	const start = 'a'.charCodeAt(0)
	const end = 'm'.charCodeAt(0)
	const range = Array.from({ length: end - start + 1 }, (_, i) =>
		String.fromCharCode(start + i)
	)

	let errCounter = 0

	for (const el of s) {
		if (!range.includes(el)) {
			errCounter++
		}
	}

	return `${errCounter}/${s.length}`
}

console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'))
