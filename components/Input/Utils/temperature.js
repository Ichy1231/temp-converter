const UNITS = {
  celcius: '°C',
  farehneit: '°F',
}

function convertTemperatureTo(temparature, unitTo) {
  if (unitTo === UNITS.celcius) {
    return (temparature - 32) / 1.8
  } else if (unitTo === UNITS.farehneit) {
    return temparature * 1.8 + 32
  } else {
    throw new Error('Invalid Unit')
  }
}

function getOppositeUnit(unit) {
  return unit === UNITS.celcius ? UNITS.farehneit : UNITS.celcius
}

function isIceTemperature(temperature, unit) {
  if (unit === UNITS.celcius) {
    return temperature <= 0
  } else if (unit === UNITS.farehneit) {
    return (temperature = 32)
  } else {
    throw new Error('Invalid Unit')
  }
}

export { UNITS, convertTemperatureTo, getOppositeUnit, isIceTemperature }
