function acronymBuster(string) {
	const knownAcr = {
		KPI: 'key performance indicators',
		EOD: 'the end of the day',
		TBD: 'to be decided',
		WAH: 'work at home',
		IAM: 'in a meeting',
		OOO: 'out of office',
		NRN: 'no reply necessary',
		CTA: 'call to action',
		SWOT: 'strengths, weaknesses, opportunities and threats'
	}
	let existAcr = string.match(/[A-Z]{3,}/g)

	if (existAcr !== null) {
		for (let i = 0; i < existAcr.length; i++) {
			if (!knownAcr[existAcr[i]]) {
				return `${existAcr[i]} is an acronym. I do not like acronyms. Please remove them from your email.`
			}
		}
	}

	let result = string

	for (const [key, value] of Object.entries(knownAcr)) {
		// const regex = new RegExp(`\\b${key}\\b`, 'g')
		result = result.replace(key, value)
	}

	return result
		.split('. ')
		.map((i, idx, arr) =>
			arr.length > 0 ? i.charAt(0).toUpperCase() + i.slice(1) : i
		)
		.join('. ')
}

// console.log(acronymBuster('hello JOPA'))
console.log(acronymBuster('Going to WAH today. NRN. OOO'))
