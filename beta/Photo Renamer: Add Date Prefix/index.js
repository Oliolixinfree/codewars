function renamePhotos(photos) {
	const counters = {}
	const result = []

	for (let i = 0; i < photos.length; i++) {
		const photo = photos[i]
		const date = photo.date
		const name = photo.name

		const extension = name.split('.').pop()

		if (!counters[date]) {
			counters[date] = 1
		} else {
			counters[date]++
		}

		const number = String(counters[date]).padStart(3, '0')

		const newName = `${date}_photo_${number}.${extension}`
		result.push(newName)
	}

	return result
}

console.log(
	renamePhotos([
		{ name: 'IMG_1234.jpg', date: '2024-01-15' },
		{ name: 'IMG_5678.jpg', date: '2024-01-15' },
		{ name: 'DSC_0001.png', date: '2024-02-20' }
	])
)
