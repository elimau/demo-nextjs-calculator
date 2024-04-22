import { Dispatch, SetStateAction } from 'react'
import {
  ARITHMATIC_OPERATION_BUTTONS,
  BUTTON,
  DISPLAY_ERROR,
  DISPLAY_INFINITY,
} from './constants'

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
  try {
    const lastCharOfDisplay = displayValue.charAt(displayValue.length - 1)
    if ([BUTTON.OP_AC].includes(buttonValue)) {
      // The AC should be the very first 'if' condition.
      newDisplayValue = '0'
    } else if (displayValue === DISPLAY_INFINITY) {
      // If infinity (i.e. some number divided by zero), then ignore all other buttons except AC (first 'if' condition)
      newDisplayValue = displayValue
    } else if (displayValue === DISPLAY_ERROR) {
      // If infinity (i.e. some number divided by zero), then ignore all other buttons except AC (first 'if' condition)
      newDisplayValue = displayValue
    } else if (
      !isNaN(Number(buttonValue)) &&
      lastCharOfDisplay === BUTTON.NUM_0
    ) {
      // If pressed a number, strip leading zeros in non-decimal numbers
      newDisplayValue = displayValue.replace(/.$/, buttonValue)
    } else if (
      ARITHMATIC_OPERATION_BUTTONS.includes(lastCharOfDisplay) &&
      ARITHMATIC_OPERATION_BUTTONS.includes(buttonValue) &&
      ![BUTTON.OP_MINUS].includes(buttonValue)
    ) {
      newDisplayValue = displayValue
    } else if (
      [BUTTON.OP_EQUALS].includes(buttonValue) && [
        ...ARITHMATIC_OPERATION_BUTTONS,
        BUTTON.NUM_DOT,
      ].includes(lastCharOfDisplay)
    ) {
      // If pressed '=', ignore it if the previous char is an operator or '.'
      newDisplayValue = displayValue
    } else if ([BUTTON.OP_EQUALS].includes(buttonValue)) {
      // If pressed '=' otherwise
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
  } catch (e) {
    // Error condition if anything unexpected should happen. It can be cleared by AC.
    // console.log('Error occurred', e)
    newDisplayValue = DISPLAY_ERROR
  }
  setDisplayValue(newDisplayValue)
}
