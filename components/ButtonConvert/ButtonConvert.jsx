import { TouchableOpacity, Text } from 'react-native'
import { s } from './ButtonConvert.style'

export function ButtonConvert({ unit, onPress, disabled }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[s.button, disabled && s.buttonDisabled]}
      disabled={disabled}
    >
      <Text style={[s.buttontxt, disabled && s.buttonTextDisabled]}>
        Convert to {unit}
      </Text>
    </TouchableOpacity>
  )
}
