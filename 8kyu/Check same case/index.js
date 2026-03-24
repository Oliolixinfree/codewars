function sameCase(a, b) {
	if (!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) return -1

	return (a === a.toUpperCase()) === (b === b.toUpperCase()) ? 1 : 0
}
