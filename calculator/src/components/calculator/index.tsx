'use client'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import Display from './components/Display'
import EqualsButton from './components/EqualsButton'
import NumberButton from './components/NumberButton'
import OperatorButton from './components/OperatorButton'

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState<number>(0)
  return (
    <div className={classNames('flex flex-col', 'p-4', 'max-w-xl')}>
      <Display>{displayValue.toString()}</Display>
      <div
        className={classNames('grid', 'grid-cols-4', 'gap-4', ' grid-rows-4')}
      >
        {/* 
        <OperatorButton>(</OperatorButton>
        <OperatorButton>)</OperatorButton>
        <OperatorButton>%</OperatorButton> 
      */}
        <OperatorButton>{'\u00A0'}</OperatorButton>
        <OperatorButton>{'\u00A0'}</OperatorButton>
        <OperatorButton>{'\u00A0'}</OperatorButton>
        <OperatorButton>AC</OperatorButton>
        <NumberButton>7</NumberButton>
        <NumberButton>8</NumberButton>
        <NumberButton>9</NumberButton>
        <OperatorButton>÷</OperatorButton>
        <NumberButton>4</NumberButton>
        <NumberButton>5</NumberButton>
        <NumberButton>6</NumberButton>
        <OperatorButton>×</OperatorButton>
        <NumberButton>1</NumberButton>
        <NumberButton>2</NumberButton>
        <NumberButton>3</NumberButton>
        <OperatorButton>-</OperatorButton>
        <NumberButton>0</NumberButton>
        <NumberButton>.</NumberButton>
        <EqualsButton>=</EqualsButton>
        <OperatorButton>+</OperatorButton>
      </div>
    </div>
  )
}
export default Calculator
