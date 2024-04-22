import { Dispatch, SetStateAction } from 'react'
import { BUTTON } from './constants'

export const calculatorRun = ({
  displayValue,
  setDisplayValue,
  buttonValue,
}: {
  displayValue: string
  setDisplayValue: Dispatch<SetStateAction<string>>
  buttonValue: string
}) => {
  console.log('displayValue/buttonValue:', {
    displayValue,
    buttonValue,
    typeofButtonValue: typeof Number(buttonValue),
    NumberButtonValue: Number(buttonValue),
  })
  let newDisplayValue

  if (!isNaN(Number(buttonValue)) && displayValue === '0') {
    // Remove extranious 0
    setDisplayValue(buttonValue)
    return
  }
  switch (buttonValue) {
    case BUTTON.OP_AC: {
      newDisplayValue = '0'
      break
    }
    case BUTTON.OP_EQUALS: {
      let mathString = displayValue
      mathString = mathString.replaceAll(BUTTON.OP_DIVIDE, '/')
      mathString = mathString.replaceAll(BUTTON.OP_MULTIPLY, '*')
      mathString = mathString.replaceAll(BUTTON.OP_MINUS, '-')
      mathString = mathString.replaceAll(BUTTON.OP_PLUS, '+')
      console.log('mathString', mathString)
      const answer = eval(mathString)
      newDisplayValue = answer
      break
    }
    default: {
      newDisplayValue = `${displayValue}${buttonValue}`
    }
  }
  setDisplayValue(newDisplayValue)
}
