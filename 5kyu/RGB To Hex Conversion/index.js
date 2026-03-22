function rgbConverter(r, g, b) {
	const normalizeToHex = num => {
		return Math.min(255, Math.max(0, num)).toString(16)
	}

	const numToHex = num => {
		return normalizeToHex(num).length === 1
			? '0' + normalizeToHex(num)
			: normalizeToHex(num)
	}

	return `${numToHex(r)}${numToHex(g)}${numToHex(b)}`.toUpperCase()
}

console.log(rgbConverter(300, 255, 255))
console.log(rgbConverter(0, 0, -20))
