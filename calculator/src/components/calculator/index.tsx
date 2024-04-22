'use client'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import Display from './components/Display'
import EqualsButton from './components/EqualsButton'
import NumberButton from './components/NumberButton'
import OperatorButton from './components/OperatorButton'
import { BUTTON, TESTID } from './constants'
import { calculatorRun } from './utils'

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState<string>('0')
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
          {BUTTON._BLANK}
          {/* {'('} */}
        </OperatorButton>
        <OperatorButton testId={BUTTON._BLANK}>
          {BUTTON._BLANK}
          {/* {')'} */}
        </OperatorButton>
        <OperatorButton testId={BUTTON._BLANK}>
          {BUTTON._BLANK}
          {/* {'%'} */}
        </OperatorButton>
        <OperatorButton
          testId={BUTTON.OP_AC}
          onClick={() => {
            handleOnClick(BUTTON.OP_AC)
          }}
        >
          {BUTTON.OP_AC}
        </OperatorButton>
        <NumberButton
          testId={BUTTON.NUM_7}
          onClick={() => {
            handleOnClick(BUTTON.NUM_7)
          }}
        >
          {BUTTON.NUM_7}
        </NumberButton>
        <NumberButton
          testId={BUTTON.NUM_8}
          onClick={() => {
            handleOnClick(BUTTON.NUM_8)
          }}
        >
          {BUTTON.NUM_8}
        </NumberButton>
        <NumberButton
          testId={BUTTON.NUM_9}
          onClick={() => {
            handleOnClick(BUTTON.NUM_9)
          }}
        >
          {BUTTON.NUM_9}
        </NumberButton>
        <OperatorButton
          testId={BUTTON.OP_DIVIDE}
          onClick={() => {
            handleOnClick(BUTTON.OP_DIVIDE)
          }}
        >
          {BUTTON.OP_DIVIDE}
        </OperatorButton>
        <NumberButton
          testId={BUTTON.NUM_4}
          onClick={() => {
            handleOnClick(BUTTON.NUM_4)
          }}
        >
          {BUTTON.NUM_4}
        </NumberButton>
        <NumberButton
          testId={BUTTON.NUM_5}
          onClick={() => {
            handleOnClick(BUTTON.NUM_5)
          }}
        >
          {BUTTON.NUM_5}
        </NumberButton>
        <NumberButton
          testId={BUTTON.NUM_6}
          onClick={() => {
            handleOnClick(BUTTON.NUM_6)
          }}
        >
          {BUTTON.NUM_6}
        </NumberButton>
        <OperatorButton
          testId={BUTTON.OP_MULTIPLY}
          onClick={() => {
            handleOnClick(BUTTON.OP_MULTIPLY)
          }}
        >
          {BUTTON.OP_MULTIPLY}
        </OperatorButton>
        <NumberButton
          testId={BUTTON.NUM_1}
          onClick={() => {
            handleOnClick(BUTTON.NUM_1)
          }}
        >
          {BUTTON.NUM_1}
        </NumberButton>
        <NumberButton
          testId={BUTTON.NUM_2}
          onClick={() => {
            handleOnClick(BUTTON.NUM_2)
          }}
        >
          {BUTTON.NUM_2}
        </NumberButton>
        <NumberButton
          testId={BUTTON.NUM_3}
          onClick={() => {
            handleOnClick(BUTTON.NUM_3)
          }}
        >
          {BUTTON.NUM_3}
        </NumberButton>
        <OperatorButton
          testId={BUTTON.OP_MINUS}
          onClick={() => {
            handleOnClick(BUTTON.OP_MINUS)
          }}
        >
          {BUTTON.OP_MINUS}
        </OperatorButton>
        <NumberButton
          testId={BUTTON.NUM_0}
          onClick={() => {
            handleOnClick(BUTTON.NUM_0)
          }}
        >
          {BUTTON.NUM_0}
        </NumberButton>
        <NumberButton
          testId={BUTTON.NUM_DOT}
          onClick={() => {
            handleOnClick(BUTTON.NUM_DOT)
          }}
        >
          {BUTTON.NUM_DOT}
        </NumberButton>
        <EqualsButton
          testId={BUTTON.OP_EQUALS}
          onClick={() => {
            handleOnClick(BUTTON.OP_EQUALS)
          }}
        >
          {BUTTON.OP_EQUALS}
        </EqualsButton>
        <OperatorButton
          testId={BUTTON.OP_PLUS}
          onClick={() => {
            handleOnClick(BUTTON.OP_PLUS)
          }}
        >
          {BUTTON.OP_PLUS}
        </OperatorButton>
      </div>
    </div>
  )
}
export default Calculator
