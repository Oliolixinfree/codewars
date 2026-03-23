function zero(operator) {
	if (!operator) return 0
	return operator(0)
}
function one(operator) {
	if (!operator) return 1
	return operator(1)
}
function two(operator) {
	if (!operator) return 2
	return operator(2)
}
function three(operator) {
	if (!operator) return 3
	return operator(3)
}
function four(operator) {
	if (!operator) return 4
	return operator(4)
}
function five(operator) {
	if (!operator) return 5
	return operator(5)
}
function six(operator) {
	if (!operator) return 6
	return operator(6)
}
function seven(operator) {
	if (!operator) return 7
	return operator(7)
}
function eight(operator) {
	if (!operator) return 8
	return operator(8)
}
function nine(operator) {
	if (!operator) return 9
	return operator(9)
}

function plus(rightOperand) {
	return function (leftOperand) {
		return leftOperand + rightOperand
	}
}
function minus(rightOperand) {
	return function (leftOperand) {
		return leftOperand - rightOperand
	}
}
function times(rightOperand) {
	return function (leftOperand) {
		return leftOperand * rightOperand
	}
}
function dividedBy(rightOperand) {
	return function (leftOperand) {
		return Math.floor(leftOperand / rightOperand)
	}
}

console.log(seven(times(five())))
console.log(four(plus(nine())))
console.log(eight(minus(three())))
console.log(six(dividedBy(two())))
