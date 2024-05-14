import { Text } from 'react-native'
import { s } from './DisplayTemp.style'

export function DisplayTemp({ temparature, unit }) {
  return (
    <Text style={s.temp}>
      {temparature} {unit}
    </Text>
  )
}
