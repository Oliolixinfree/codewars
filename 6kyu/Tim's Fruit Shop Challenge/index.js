function fruitPack(orders) {
	const warehouse = []
	let box = 10
	let pallet = 50

	for (let i = 0; i < orders.length; i++) {
		let completedOrder = ['', '', '']
		let parsed = orders[i].match(/\d+[a-z]/gi)
		let maxLength

		for (let j = 0; j < parsed.length; j++) {
			let boxCounter = 0
			let palletCounter = 0
			let remainingUnits = 0

			let fruit = parsed[j].at(-1)
			let amount = Number(parsed[j].slice(0, parsed[j].length - 1))

			if (amount >= pallet) {
				palletCounter = Math.floor(amount / pallet)
				completedOrder[2] += `[${fruit}]`.repeat(palletCounter)
			}

			if (amount - palletCounter * pallet >= box) {
				boxCounter = Math.floor((amount - palletCounter * pallet) / box)
				completedOrder[1] += `{${fruit}}`.repeat(boxCounter)
			}

			remainingUnits = amount - palletCounter * pallet - boxCounter * box
			if (remainingUnits > 0) {
				completedOrder[0] += '(' + fruit.repeat(remainingUnits) + ')'
			}

			maxLength = Math.max(...completedOrder.map(item => item.length))
			console.log(maxLength)

			completedOrder.map(item =>
				item.length < maxLength ? item.padStart(maxLength, '-') : item
			)
		}
		warehouse.push(
			completedOrder.map(item =>
				item.length < maxLength ? item.padStart(maxLength, '-') : item
			)
		)
	}

	return warehouse
}

console.log(fruitPack(['63a21b']))
console.log(fruitPack(['10a']))
console.log(fruitPack(['10a3b', '64j1k92i']))
