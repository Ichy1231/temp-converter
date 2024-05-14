import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text, View, ImageBackground, Alert } from 'react-native'
import { s } from './App.style'
import hotBackground from './assets/hot.png'
import { Input } from './components/Input/Input'
import { DisplayTemp } from './components/Input/DisplayTemp/DisplayTemp'
import coldBackground from './assets/cold.png'
import {
  UNITS,
  getOppositeUnit,
  convertTemperatureTo,
  isIceTemperature,
} from './components/Input/Utils/temperature'
import { ButtonConvert } from './components/ButtonConvert/ButtonConvert'

export default function App() {
  const [inputValue, setInputValue] = useState(0)
  const [currentUnit, setCurrentUnit] = useState('°C')
  const oppositeUnit = getOppositeUnit(currentUnit)
  const [currentBackground, setCurrentBackground] = useState(coldBackground)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  useEffect(() => {
    const isCold = isIceTemperature(inputValue, currentUnit)
    setCurrentBackground(isCold ? coldBackground : hotBackground)
  }, [inputValue, currentUnit])

  function getConvertedTemperatureTo() {
    if (isNaN(inputValue)) {
      return ''
    } else {
      return convertTemperatureTo(inputValue, oppositeUnit).toFixed(1)
    }
  }

  function error(script) {
    if (isNaN(script)) {
      Alert.alert('Invalid Input')
      setInputValue(0)
      setIsButtonDisabled(true)
    } else {
      setInputValue(Number(script))
      setIsButtonDisabled(false)
    }
  }

  return (
    <ImageBackground style={s.backgroundImg} source={currentBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <DisplayTemp
              unit={oppositeUnit}
              temparature={getConvertedTemperatureTo()}
            />
            <Input unit={currentUnit} onChange={error} ondefaultValue={0} />
            <ButtonConvert
              onPress={() => {
                setCurrentUnit(oppositeUnit)
              }}
              unit={currentUnit}
              disabled={isButtonDisabled}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  )
}
