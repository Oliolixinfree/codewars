function solution(string) {
	return [...string].map(i => i.replace(/[A-Z]/, ' ' + i)).join('')
}

console.log(solution('camelCasingTest'))
