function humanReadable(seconds) {
	const hours = Math.floor(seconds / 3600)
	const minutes = Math.floor((seconds % 3600) / 60)
	const sec = seconds % 60

	return [hours, minutes, sec].map(i => String(i).padStart(2, '0')).join(':')
}

console.log(humanReadable(59))
console.log(humanReadable(60))
console.log(humanReadable(90))
console.log(humanReadable(3599))
console.log(humanReadable(3600))
