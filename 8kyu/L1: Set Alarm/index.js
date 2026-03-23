function setAlarm(employed, vacation) {
	if (employed && vacation === true) return false

	return employed
}

// or

function setAlarm(employed, vacation) {
	return employed && !vacation
}
