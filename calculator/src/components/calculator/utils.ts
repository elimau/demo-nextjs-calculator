import { Dispatch, SetStateAction } from 'react'
import { ARITHMATIC_OPERATION_BUTTONS, BUTTON } from './constants'

export const calculatorRun = ({
  displayValue,
  setDisplayValue,
  buttonValue,
}: {
  displayValue: string
  setDisplayValue: Dispatch<SetStateAction<string>>
  buttonValue: string
}) => {
  let newDisplayValue
  const lastCharOfDisplay = displayValue.charAt(displayValue.length - 1)
  if (!isNaN(Number(buttonValue)) && lastCharOfDisplay === BUTTON.NUM_0) {
    // Strip leading zeros in non-decimal numbers
    newDisplayValue = displayValue.replace(/.$/, buttonValue)
  } else if (
    ARITHMATIC_OPERATION_BUTTONS.includes(lastCharOfDisplay) &&
    ARITHMATIC_OPERATION_BUTTONS.includes(buttonValue) &&
    ![BUTTON.OP_MINUS].includes(buttonValue)
  ) {
    newDisplayValue = displayValue
  } else if ([BUTTON.OP_AC].includes(buttonValue)) {
    newDisplayValue = '0'
  } else if ([BUTTON.OP_EQUALS].includes(buttonValue)) {
    let mathString = displayValue
    mathString = mathString.replaceAll(BUTTON.OP_DIVIDE, '/')
    mathString = mathString.replaceAll(BUTTON.OP_MULTIPLY, '*')
    mathString = mathString.replaceAll(BUTTON.OP_MINUS, '-')
    mathString = mathString.replaceAll(BUTTON.OP_PLUS, '+')
    let answer = eval(mathString)
    newDisplayValue = `${answer}`
  } else {
    newDisplayValue = `${displayValue}${buttonValue}`
  }

  setDisplayValue(newDisplayValue)
}
