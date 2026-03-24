const resolveFleetStatus = data => {
	const latestMap = new Map()

	for (const item of data) {
		const vehicleId = item.id_vehicle || item.v_id

		if (!latestMap.has(vehicleId) || item.ts > latestMap.get(vehicleId).ts) {
			latestMap.set(vehicleId, item)
		}
	}

	const filtredData = Array.from(latestMap.values())

	for (const el of filtredData) {
		if (el.hasOwnProperty('v_id')) {
			el.vehicleId = el.v_id
			delete el.v_id
		} else if (el.hasOwnProperty('id_vehicle')) {
			el.vehicleId = el.id_vehicle
			delete el.id_vehicle
		}

		if (typeof el.speed === 'string') {
			el.speed = Math.round(Number(el.speed.slice(0, -3)) * 1.6)
		}

		if (el.speed > 0 && el.engine == 'OFF') {
			el.status = 'CRITICAL_ALARM'
			delete el.speed
			delete el.engine
		} else {
			el.status = 'NORMAL'
			delete el.speed
			delete el.engine
		}

		el.lastUpdate = el.ts
		delete el.ts
	}

	return filtredData.sort((a, b) => a.vehicleId.localeCompare(b.vehicleId))
}

console.log(
	resolveFleetStatus([
		{ id_vehicle: 'CAR_1', speed: 10, engine: 'ON', ts: 200 },
		{ v_id: 'CAR_2', speed: 10, engine: 'ON', ts: 100 },
		{ v_id: 'CAR_2', speed: '20mph', engine: 'ON', ts: 400 },
		{ v_id: 'CAR_1', speed: 10, engine: 'OFF', ts: 100 }
	])
)
