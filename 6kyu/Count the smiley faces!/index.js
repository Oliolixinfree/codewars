function countSmileys(arr) {
	const validEyes = [':', ';']
	const validNoses = ['-', '~']
	const validMouths = [')', 'D']
	let count = 0

	for (const face of arr) {
		if (face.length === 2) {
			if (validEyes.includes(face[0]) && validMouths.includes(face[1])) {
				count++
			}
		} else if (face.length === 3) {
			if (
				validEyes.includes(face[0]) &&
				validNoses.includes(face[1]) &&
				validMouths.includes(face[2])
			) {
				count++
			}
		}
	}

	return count
}

console.log(countSmileys([]))
console.log(countSmileys([':D', ':~)', ';~D', ':)']))
console.log(countSmileys([':)', ':(', ':D', ':O', ':;']))
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))
