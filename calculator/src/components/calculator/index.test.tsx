import { fireEvent, getByText, render, screen } from '@testing-library/react'
import { BUTTON, TESTID } from './constants'
import Page from './index'

describe('Calculator', () => {
  it('Will strip leading 0s in integer numbers and calculation works', async () => {
    // Inputs and xpectations
    const input = `03${BUTTON.OP_MULTIPLY}03`
    const outputDisplay = `3${BUTTON.OP_MULTIPLY}3`
    const outputCalculation = '9'

    // Run and test
    render(<Page />)
    const clickSequence = Array.from(input)
    const displayElement = screen.getByTestId(TESTID.DISPLAY)
    const buttonsElement = screen.getByTestId(TESTID.BUTTONS)
    for (let i = 0; i < clickSequence.length; i++) {
      fireEvent.click(getByText(buttonsElement, clickSequence[i]))
    }
    expect(displayElement.textContent).toBe(outputDisplay)
    fireEvent.click(getByText(buttonsElement, BUTTON.OP_EQUALS))
    expect(displayElement.textContent).toBe(outputCalculation)
    console.log('test:', {
      input,
      outputDisplay,
      outputCalculation,
    })
  })
  it('Will not strip leading 0s in decimal numbers and calculation works', async () => {
    // Inputs and xpectations
    const input = `0.3${BUTTON.OP_PLUS}0.3`
    const outputDisplay = `0.3${BUTTON.OP_PLUS}0.3`
    const outputCalculation = '0.6'

    // Run and test
    render(<Page />)
    const clickSequence = Array.from(input)
    const displayElement = screen.getByTestId(TESTID.DISPLAY)
    const buttonsElement = screen.getByTestId(TESTID.BUTTONS)
    for (let i = 0; i < clickSequence.length; i++) {
      fireEvent.click(getByText(buttonsElement, clickSequence[i]))
    }
    expect(displayElement.textContent).toBe(outputDisplay)
    fireEvent.click(getByText(buttonsElement, BUTTON.OP_EQUALS))
    expect(displayElement.textContent).toBe(outputCalculation)
    console.log('test:', {
      input,
      outputDisplay,
      outputCalculation,
    })
  })
  it('Chaining calculculations by using "=" and continuing with more operations works', async () => {
    // // Inputs and xpectations
    // const input1 = `${BUTTON.OP_AC}`
    // const outputDisplay1 = `0`
    // const outputCalculation1 = '0'
    // const input2 = `${BUTTON.OP_AC}0.3${BUTTON.OP_PLUS}0.3`
    // const outputDisplay2 = `0.3${BUTTON.OP_PLUS}0.3`
    // const outputCalculation2 = '0.6'
    // const input3 = `${BUTTON.OP_AC}0.3${BUTTON.OP_PLUS}0.3`
    // const outputDisplay3 = `0.3${BUTTON.OP_PLUS}0.3`
    // const outputCalculation3 = '0.6'

    // // Run and test
    // render(<Page />)
    // const clickSequence = Array.from(input)
    // const displayElement = screen.getByTestId(TESTID.DISPLAY)
    // const buttonsElement = screen.getByTestId(TESTID.BUTTONS)
    // for (let i = 0; i < clickSequence.length; i++) {
    //   fireEvent.click(getByText(buttonsElement, clickSequence[i]))
    // }
    // expect(displayElement.textContent).toBe(outputDisplay)
    // fireEvent.click(getByText(buttonsElement, BUTTON.OP_EQUALS))
    // expect(displayElement.textContent).toBe(outputCalculation)
    // console.log('test:', {
    //   input,
    //   outputDisplay,
    //   outputCalculation,
    // })
  })
  it('On click AC, will clear the display and next calculation is correct', async () => {
    // // Inputs and xpectations
    // const input1 = `${BUTTON.OP_AC}`
    // const outputDisplay1 = `0`
    // const outputAfterAc1 = '0'
    // const input2 = `${BUTTON.OP_AC}0.3${BUTTON.OP_PLUS}0.3`
    // const outputDisplay2 = `0.3${BUTTON.OP_PLUS}0.3`
    // const outputAfterAc2 = '0'
    // const input3 = `${BUTTON.OP_AC}0.3${BUTTON.OP_PLUS}0.3`
    // const outputDisplay3 = `0.3${BUTTON.OP_PLUS}0.3`
    // const outputAfterAc2 = '0'

    // // Run and test
    // render(<Page />)
    // const clickSequence = Array.from(input)
    // const displayElement = screen.getByTestId(TESTID.DISPLAY)
    // const buttonsElement = screen.getByTestId(TESTID.BUTTONS)
    // for (let i = 0; i < clickSequence.length; i++) {
    //   fireEvent.click(getByText(buttonsElement, clickSequence[i]))
    // }
    // expect(displayElement.textContent).toBe(outputDisplay)
    // fireEvent.click(getByText(buttonsElement, BUTTON.OP_EQUALS))
    // expect(displayElement.textContent).toBe(outputCalculation)
    // console.log('test:', {
    //   input,
    //   outputDisplay,
    //   outputCalculation,
    // })
  })
  it('On click "=" twice, will keep the display value and have no errors', async () => {
    // // Inputs and xpectations
    // const input1 = `${BUTTON.OP_AC}`
    // const outputDisplay1 = `0`
    // const outputCalculation1 = '0'
    // const input2 = `${BUTTON.OP_AC}0.3${BUTTON.OP_PLUS}0.3`
    // const outputDisplay2 = `0.3${BUTTON.OP_PLUS}0.3`
    // const outputCalculation2 = '0.6'
    // const input3 = `${BUTTON.OP_AC}0.3${BUTTON.OP_PLUS}0.3`
    // const outputDisplay3 = `0.3${BUTTON.OP_PLUS}0.3`
    // const outputCalculation3 = '0.6'

    // // Run and test
    // render(<Page />)
    // const clickSequence = Array.from(input)
    // const displayElement = screen.getByTestId(TESTID.DISPLAY)
    // const buttonsElement = screen.getByTestId(TESTID.BUTTONS)
    // for (let i = 0; i < clickSequence.length; i++) {
    //   fireEvent.click(getByText(buttonsElement, clickSequence[i]))
    // }
    // expect(displayElement.textContent).toBe(outputDisplay)
    // fireEvent.click(getByText(buttonsElement, BUTTON.OP_EQUALS))
    // expect(displayElement.textContent).toBe(outputCalculation)
    // console.log('test:', {
    //   input,
    //   outputDisplay,
    //   outputCalculation,
    // })
  })
  it('On click operation button more than once consecutively, will ignore the non-first operation clicks', async () => {
    // // Inputs and xpectations
    // const input1 = `${BUTTON.OP_AC}`
    // const outputDisplay1 = `0`
    // const outputCalculation1 = '0'
    // const input2 = `${BUTTON.OP_AC}0.3${BUTTON.OP_PLUS}0.3`
    // const outputDisplay2 = `0.3${BUTTON.OP_PLUS}0.3`
    // const outputCalculation2 = '0.6'
    // const input3 = `${BUTTON.OP_AC}0.3${BUTTON.OP_PLUS}0.3`
    // const outputDisplay3 = `0.3${BUTTON.OP_PLUS}0.3`
    // const outputCalculation3 = '0.6'

    // // Run and test
    // render(<Page />)
    // const clickSequence = Array.from(input)
    // const displayElement = screen.getByTestId(TESTID.DISPLAY)
    // const buttonsElement = screen.getByTestId(TESTID.BUTTONS)
    // for (let i = 0; i < clickSequence.length; i++) {
    //   fireEvent.click(getByText(buttonsElement, clickSequence[i]))
    // }
    // expect(displayElement.textContent).toBe(outputDisplay)
    // fireEvent.click(getByText(buttonsElement, BUTTON.OP_EQUALS))
    // expect(displayElement.textContent).toBe(outputCalculation)
    // console.log('test:', {
    //   input,
    //   outputDisplay,
    //   outputCalculation,
    // })
  })
})
