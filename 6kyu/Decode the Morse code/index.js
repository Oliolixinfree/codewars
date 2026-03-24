const MORSE_CODE = {
	'.-': 'A',
	'-...': 'B',
	'-.-.': 'C',
	'-..': 'D',
	'.': 'E',
	'..-.': 'F',
	'--.': 'G',
	'....': 'H',
	'..': 'I',
	'.---': 'J',
	'-.-': 'K',
	'.-..': 'L',
	'--': 'M',
	'-.': 'N',
	'---': 'O',
	'.--.': 'P',
	'--.-': 'Q',
	'.-.': 'R',
	'...': 'S',
	'-': 'T',
	'..-': 'U',
	'...-': 'V',
	'.--': 'W',
	'-..-': 'X',
	'-.--': 'Y',
	'--..': 'Z',
	'-----': '0',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'.-.-.-': '.',
	'--..--': ',',
	'..--..': '?',
	'.----.': "'",
	'-.-.--': '!',
	'-..-.': '/',
	'-.--.': '(',
	'-.--.-': ')',
	'.-...': '&',
	'---...': ':',
	'-.-.-.': ';',
	'-...-': '=',
	'.-.-.': '+',
	'-....-': '-',
	'..--.-': '_',
	'.-..-.': '"',
	'...-..-': '$',
	'.--.-.': '@',
	'...---...': 'SOS'
}

decodeMorse = function (morseCode) {
	const arrPhrase = morseCode
		.trim()
		.split('   ')
		.map(i => i.split(' '))

	const decodedPhrase = []

	for (let i = 0; i < arrPhrase.length; i++) {
		let word = ''

		for (const element of arrPhrase[i]) {
			word += MORSE_CODE[element]
		}

		decodedPhrase.push(word)
	}

	return decodedPhrase.join(' ')
}

//or
decodeMorse = function (morseCode) {
	return morseCode
		.trim()
		.split(/  | /)
		.map(code => MORSE_CODE[code] || ' ')
		.join('')
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))
