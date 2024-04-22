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
  // console.log('displayValue/buttonValue:', {
  //   displayValue,
  //   buttonValue,
  //   typeofButtonValue: typeof Number(buttonValue),
  //   NumberButtonValue: Number(buttonValue),
  // })
  let newDisplayValue

  // Strip leading zeros in non-decimal numbers
  const lastCharOfDisplay = displayValue.charAt(displayValue.length - 1)
  if (!isNaN(Number(buttonValue)) && lastCharOfDisplay === BUTTON.NUM_0) {
    setDisplayValue(displayValue.replace(/.$/, buttonValue))
    return
  }

  // Handle operations
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
      let answer = eval(mathString)
      newDisplayValue = `${answer}`
      break
    }
    default: {
      newDisplayValue = `${displayValue}${buttonValue}`
    }
  }
  setDisplayValue(newDisplayValue)
}
