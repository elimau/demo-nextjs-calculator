'use client'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import Display from './components/Display'
import EqualsButton from './components/EqualsButton'
import NumberButton from './components/NumberButton'
import OperatorButton from './components/OperatorButton'
import { BUTTON, BUTTON_LABEL, DISPLAY_ERROR, TESTID } from './constants'
import { calculatorRun } from './utils'

type Props = {
  initialDisplayValue?: string
}
const Calculator = ({ initialDisplayValue = '0' }: Props) => {
  const [displayValue, setDisplayValue] = useState<string>(initialDisplayValue)

  const handleOnClick = (buttonValue: string) => {
    calculatorRun({
      displayValue,
      setDisplayValue,
      buttonValue,
    })
  }
  
  return (
    <div className={classNames('flex flex-col', 'p-4', 'max-w-xl')}>
      <Display testId={TESTID.DISPLAY}>{displayValue.toString()}</Display>
      <div
        className={classNames('grid', 'grid-cols-4', 'gap-4', ' grid-rows-4')}
        data-testid={TESTID.BUTTONS}
      >
        <OperatorButton testId={BUTTON._BLANK}>
          {BUTTON_LABEL._BLANK}
          {/* {'('} */}
        </OperatorButton>
        <OperatorButton testId={BUTTON._BLANK}>
          {BUTTON_LABEL._BLANK}
          {/* {')'} */}
        </OperatorButton>
        <OperatorButton testId={BUTTON._BLANK}>
          {BUTTON_LABEL._BLANK}
          {/* {'%'} */}
        </OperatorButton>
        <OperatorButton
          testId={BUTTON.OP_AC}
          onClick={() => {
            handleOnClick(BUTTON.OP_AC)
          }}
        >
          {BUTTON_LABEL.OP_AC}
        </OperatorButton>
        <NumberButton
          testId={BUTTON.NUM_7}
          onClick={() => {
            handleOnClick(BUTTON.NUM_7)
          }}
        >
          {BUTTON_LABEL.NUM_7}
        </NumberButton>
        <NumberButton
          testId={BUTTON.NUM_8}
          onClick={() => {
            handleOnClick(BUTTON.NUM_8)
          }}
        >
          {BUTTON_LABEL.NUM_8}
        </NumberButton>
        <NumberButton
          testId={BUTTON.NUM_9}
          onClick={() => {
            handleOnClick(BUTTON.NUM_9)
          }}
        >
          {BUTTON_LABEL.NUM_9}
        </NumberButton>
        <OperatorButton
          testId={BUTTON.OP_DIVIDE}
          onClick={() => {
            handleOnClick(BUTTON.OP_DIVIDE)
          }}
        >
          {BUTTON_LABEL.OP_DIVIDE}
        </OperatorButton>
        <NumberButton
          testId={BUTTON.NUM_4}
          onClick={() => {
            handleOnClick(BUTTON.NUM_4)
          }}
        >
          {BUTTON_LABEL.NUM_4}
        </NumberButton>
        <NumberButton
          testId={BUTTON.NUM_5}
          onClick={() => {
            handleOnClick(BUTTON.NUM_5)
          }}
        >
          {BUTTON_LABEL.NUM_5}
        </NumberButton>
        <NumberButton
          testId={BUTTON.NUM_6}
          onClick={() => {
            handleOnClick(BUTTON.NUM_6)
          }}
        >
          {BUTTON_LABEL.NUM_6}
        </NumberButton>
        <OperatorButton
          testId={BUTTON.OP_MULTIPLY}
          onClick={() => {
            handleOnClick(BUTTON.OP_MULTIPLY)
          }}
        >
          {BUTTON_LABEL.OP_MULTIPLY}
        </OperatorButton>
        <NumberButton
          testId={BUTTON.NUM_1}
          onClick={() => {
            handleOnClick(BUTTON.NUM_1)
          }}
        >
          {BUTTON_LABEL.NUM_1}
        </NumberButton>
        <NumberButton
          testId={BUTTON.NUM_2}
          onClick={() => {
            handleOnClick(BUTTON.NUM_2)
          }}
        >
          {BUTTON_LABEL.NUM_2}
        </NumberButton>
        <NumberButton
          testId={BUTTON.NUM_3}
          onClick={() => {
            handleOnClick(BUTTON.NUM_3)
          }}
        >
          {BUTTON_LABEL.NUM_3}
        </NumberButton>
        <OperatorButton
          testId={BUTTON.OP_MINUS}
          onClick={() => {
            handleOnClick(BUTTON.OP_MINUS)
          }}
        >
          {BUTTON_LABEL.OP_MINUS}
        </OperatorButton>
        <NumberButton
          testId={BUTTON.NUM_0}
          onClick={() => {
            handleOnClick(BUTTON.NUM_0)
          }}
        >
          {BUTTON_LABEL.NUM_0}
        </NumberButton>
        <NumberButton
          testId={BUTTON.NUM_DOT}
          onClick={() => {
            handleOnClick(BUTTON.NUM_DOT)
          }}
        >
          {BUTTON_LABEL.NUM_DOT}
        </NumberButton>
        <EqualsButton
          testId={BUTTON.OP_EQUALS}
          onClick={() => {
            handleOnClick(BUTTON.OP_EQUALS)
          }}
        >
          {BUTTON_LABEL.OP_EQUALS}
        </EqualsButton>
        <OperatorButton
          testId={BUTTON.OP_PLUS}
          onClick={() => {
            handleOnClick(BUTTON.OP_PLUS)
          }}
        >
          {BUTTON_LABEL.OP_PLUS}
        </OperatorButton>
      </div>
    </div>
  )
}
export default Calculator
