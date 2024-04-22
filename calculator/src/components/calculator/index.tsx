'use client'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import Display from './components/Display'
import EqualsButton from './components/EqualsButton'
import NumberButton from './components/NumberButton'
import OperatorButton from './components/OperatorButton'
import { BUTTON } from './constants'
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
      <Display>{displayValue.toString()}</Display>
      <div
        className={classNames('grid', 'grid-cols-4', 'gap-4', ' grid-rows-4')}
      >
        <OperatorButton testId={BUTTON._BLANK}>
          {'\u00A0'}
          {/* {'('} */}
        </OperatorButton>
        <OperatorButton testId={BUTTON._BLANK}>
          {'\u00A0'}
          {/* {')'} */}
        </OperatorButton>
        <OperatorButton testId={BUTTON._BLANK}>
          {'\u00A0'}
          {/* {'%'} */}
        </OperatorButton>
        <OperatorButton
          testId={BUTTON.OP_AC}
          onClick={() => {
            handleOnClick(BUTTON.OP_AC)
          }}
        >
          AC
        </OperatorButton>
        <NumberButton
          testId={BUTTON.NUM_7}
          onClick={() => {
            handleOnClick(BUTTON.NUM_7)
          }}
        >
          7
        </NumberButton>
        <NumberButton
          testId={BUTTON.NUM_8}
          onClick={() => {
            handleOnClick(BUTTON.NUM_8)
          }}
        >
          8
        </NumberButton>
        <NumberButton
          testId={BUTTON.NUM_9}
          onClick={() => {
            handleOnClick(BUTTON.NUM_9)
          }}
        >
          9
        </NumberButton>
        <OperatorButton
          testId={BUTTON.OP_DIVIDE}
          onClick={() => {
            handleOnClick(BUTTON.OP_DIVIDE)
          }}
        >
          ÷
        </OperatorButton>
        <NumberButton
          testId={BUTTON.NUM_4}
          onClick={() => {
            handleOnClick(BUTTON.NUM_4)
          }}
        >
          4
        </NumberButton>
        <NumberButton
          testId={BUTTON.NUM_5}
          onClick={() => {
            handleOnClick(BUTTON.NUM_5)
          }}
        >
          5
        </NumberButton>
        <NumberButton
          testId={BUTTON.NUM_6}
          onClick={() => {
            handleOnClick(BUTTON.NUM_6)
          }}
        >
          6
        </NumberButton>
        <OperatorButton
          testId={BUTTON.OP_MULTIPLY}
          onClick={() => {
            handleOnClick(BUTTON.OP_MULTIPLY)
          }}
        >
          ×
        </OperatorButton>
        <NumberButton
          testId={BUTTON.NUM_1}
          onClick={() => {
            handleOnClick(BUTTON.NUM_1)
          }}
        >
          1
        </NumberButton>
        <NumberButton
          testId={BUTTON.NUM_2}
          onClick={() => {
            handleOnClick(BUTTON.NUM_2)
          }}
        >
          2
        </NumberButton>
        <NumberButton
          testId={BUTTON.NUM_3}
          onClick={() => {
            handleOnClick(BUTTON.NUM_3)
          }}
        >
          3
        </NumberButton>
        <OperatorButton
          testId={BUTTON.OP_MINUS}
          onClick={() => {
            handleOnClick(BUTTON.OP_MINUS)
          }}
        >
          -
        </OperatorButton>
        <NumberButton
          testId={BUTTON.NUM_0}
          onClick={() => {
            handleOnClick(BUTTON.NUM_0)
          }}
        >
          0
        </NumberButton>
        <NumberButton
          testId={BUTTON.NUM_DOT}
          onClick={() => {
            handleOnClick(BUTTON.NUM_DOT)
          }}
        >
          .
        </NumberButton>
        <EqualsButton
          testId={BUTTON.OP_EQUALS}
          onClick={() => {
            handleOnClick(BUTTON.OP_EQUALS)
          }}
        >
          =
        </EqualsButton>
        <OperatorButton
          testId={BUTTON.OP_PLUS}
          onClick={() => {
            handleOnClick(BUTTON.OP_PLUS)
          }}
        >
          +
        </OperatorButton>
      </div>
    </div>
  )
}
export default Calculator
