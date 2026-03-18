function basicOp(operation, value1, value2) {
	switch (operation) {
		case '+':
			return value1 + value2
		case '-':
			return value1 - value2
		case '*':
			return value1 * value2
		case '/':
			return value1 / value2

		default:
			break
	}
}

// or
function basicOp(operation, value1, value2) {
	const cases = {
		'+': value1 + value2,
		'-': value1 - value2,
		'*': value1 * value2,
		'/': value1 / value2
	}
	return cases[operation]
}

// or
function basicOp(operation, value1, value2) {
	return eval(value1 + operation + value2)
}

console.log(basicOp('+', 4, 7))
