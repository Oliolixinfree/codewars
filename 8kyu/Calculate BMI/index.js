function bmi(weight, height) {
	const bmiRes = weight / height ** 2

	switch (true) {
		case bmiRes <= 18.5:
			return 'Underweight'
		case bmiRes <= 25:
			return 'Normal'
		case bmiRes <= 30:
			return 'Overweight'
		default:
			return 'Obese'
	}
}

console.log(bmi(50, 1.8))
