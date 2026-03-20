function solution(str, ending) {
	if (ending.length === 0) return true
	return str.slice(-ending.length) === ending
}

console.log(solution('abcde', ''))
console.log(solution('abcde', 'cde'))
console.log(solution('abcde', 'abc'))
