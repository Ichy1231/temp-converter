import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 30,
    width: 250,
  },

  buttontxt: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  buttonDisabled: {
    backgroundColor: 'gray',
  },
  buttonTextDisabled: {
    color: 'darkgray',
  },
})
