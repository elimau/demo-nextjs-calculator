import { fireEvent, getByText, render, screen } from '@testing-library/react'
import { BUTTON, TESTID } from './constants'
import Page from './index'

describe('Calculator', () => {
  it('Will strip leading 0s in integer numbers and calculation works', async () => {
    // Inputs and expectations
    const input = `03${BUTTON.OP_MULTIPLY}03`
    const outputDisplay = `3${BUTTON.OP_MULTIPLY}3`
    const outputCalculation = '9'

    // Run and test
    render(<Page />)
    const displayElement = screen.getByTestId(TESTID.DISPLAY)
    const buttonsElement = screen.getByTestId(TESTID.BUTTONS)
    // Do calculation
    const clickSequence = Array.from(input)
    for (let i = 0; i < clickSequence.length; i++) {
      fireEvent.click(getByText(buttonsElement, clickSequence[i]))
    }
    expect(displayElement.textContent).toBe(outputDisplay)
    fireEvent.click(getByText(buttonsElement, BUTTON.OP_EQUALS))
    expect(displayElement.textContent).toBe(outputCalculation)
    // console.log('test:', {
    //   input,
    //   outputDisplay,
    //   outputCalculation,
    // })
  })
  it('Will not strip leading 0s in decimal numbers and calculation works', async () => {
    // Inputs and expectations
    const input = `0.3${BUTTON.OP_PLUS}0.3`
    const outputDisplay = `0.3${BUTTON.OP_PLUS}0.3`
    const outputCalculation = '0.6'

    // Run and test
    render(<Page />)
    const displayElement = screen.getByTestId(TESTID.DISPLAY)
    const buttonsElement = screen.getByTestId(TESTID.BUTTONS)
    // Do calculation
    const clickSequence = Array.from(input)
    for (let i = 0; i < clickSequence.length; i++) {
      fireEvent.click(getByText(buttonsElement, clickSequence[i]))
    }
    expect(displayElement.textContent).toBe(outputDisplay)
    fireEvent.click(getByText(buttonsElement, BUTTON.OP_EQUALS))
    expect(displayElement.textContent).toBe(outputCalculation)
    // console.log('test:', {
    //   input,
    //   outputDisplay,
    //   outputCalculation,
    // })
  })
  it('Chaining calculculations by using "=" and continuing with more operations works', async () => {
    // Inputs and expectations
    const input1 = `3${BUTTON.OP_DIVIDE}8`
    const outputDisplay1 = `3${BUTTON.OP_DIVIDE}8`
    const outputCalculation1 = '0.375'
    const input2 = `${BUTTON.OP_MINUS}99`
    const outputDisplay2 = `${outputCalculation1}${BUTTON.OP_MINUS}99`
    const outputCalculation2 = '-98.625'

    // Run and test
    render(<Page />)
    const displayElement = screen.getByTestId(TESTID.DISPLAY)
    const buttonsElement = screen.getByTestId(TESTID.BUTTONS)
    // First calculation
    let clickSequence = Array.from(input1)
    for (let i = 0; i < clickSequence.length; i++) {
      fireEvent.click(getByText(buttonsElement, clickSequence[i]))
    }
    expect(displayElement.textContent).toBe(outputDisplay1)
    fireEvent.click(getByText(buttonsElement, BUTTON.OP_EQUALS))
    expect(displayElement.textContent).toBe(outputCalculation1)
    // console.log('test:', {
    //   input1,
    //   outputDisplay1,
    //   outputCalculation1,
    // })

    // Second calculation
    clickSequence = Array.from(input2)
    for (let i = 0; i < clickSequence.length; i++) {
      fireEvent.click(getByText(buttonsElement, clickSequence[i]))
    }
    expect(displayElement.textContent).toBe(outputDisplay2)
    fireEvent.click(getByText(buttonsElement, BUTTON.OP_EQUALS))
    expect(displayElement.textContent).toBe(outputCalculation2)
    // console.log('test:', {
    //   input2,
    //   outputDisplay2,
    //   outputCalculation2,
    // })
  })
  it('On click AC, will clear the display and next calculation is correct', async () => {
    // Inputs and expectations
    const input1 = `3${BUTTON.OP_DIVIDE}`
    const outputDisplay1 = `3${BUTTON.OP_DIVIDE}`
    const outputAfterClickAc = '0'
    const input2 = `4${BUTTON.OP_MULTIPLY}.25`
    const outputDisplay2 = `4${BUTTON.OP_MULTIPLY}.25`
    const outputCalculation2 = '1'

    // Run and test
    render(<Page />)
    const displayElement = screen.getByTestId(TESTID.DISPLAY)
    const buttonsElement = screen.getByTestId(TESTID.BUTTONS)
    // First calculation
    let clickSequence = Array.from(input1)
    for (let i = 0; i < clickSequence.length; i++) {
      fireEvent.click(getByText(buttonsElement, clickSequence[i]))
    }
    expect(displayElement.textContent).toBe(outputDisplay1)
    fireEvent.click(getByText(buttonsElement, BUTTON.OP_AC)) // Click AC
    expect(displayElement.textContent).toBe(outputAfterClickAc)
    // console.log('test:', {
    //   input1,
    //   outputDisplay1,
    //   outputAfterClickAc,
    // })

    // Second calculation
    clickSequence = Array.from(input2)
    for (let i = 0; i < clickSequence.length; i++) {
      fireEvent.click(getByText(buttonsElement, clickSequence[i]))
    }
    expect(displayElement.textContent).toBe(outputDisplay2)
    fireEvent.click(getByText(buttonsElement, BUTTON.OP_EQUALS))
    expect(displayElement.textContent).toBe(outputCalculation2)
    // console.log('test:', {
    //   input2,
    //   outputDisplay2,
    //   outputCalculation2,
    // })
  })
  it('On clicking multiple operation buttons, it will only keep the first operation and ignore the rest of the operation clicks, except minus just before the number (which is a negative number)', async () => {
    // Inputs and xpectations
    const input1 = `-6${BUTTON.OP_MULTIPLY}${BUTTON.OP_MULTIPLY}${BUTTON.OP_MULTIPLY}3`
    const outputDisplay1 = `0-6${BUTTON.OP_MULTIPLY}3`
    const outputCalculation1 = '-18'
    // Run and test
    render(<Page />)
    const displayElement = screen.getByTestId(TESTID.DISPLAY)
    const buttonsElement = screen.getByTestId(TESTID.BUTTONS)
    // First calculation
    let clickSequence = Array.from(input1)
    for (let i = 0; i < clickSequence.length; i++) {
      fireEvent.click(getByText(buttonsElement, clickSequence[i]))
    }
    expect(displayElement.textContent).toBe(outputDisplay1)
    fireEvent.click(getByText(buttonsElement, BUTTON.OP_EQUALS))
    expect(displayElement.textContent).toBe(outputCalculation1)
    // console.log('test:', {
    //   input1,
    //   outputDisplay1,
    //   outputCalculation1,
    // })
  })
  it('Works with negative numbers', async () => {
    // Inputs and xpectations
    const input1 = `-2${BUTTON.OP_MULTIPLY}-3${BUTTON.OP_MULTIPLY}-2`
    const outputDisplay1 = `0-2${BUTTON.OP_MULTIPLY}-3${BUTTON.OP_MULTIPLY}-2`
    const outputCalculation1 = '-12'
    // Run and test
    render(<Page />)
    const displayElement = screen.getByTestId(TESTID.DISPLAY)
    const buttonsElement = screen.getByTestId(TESTID.BUTTONS)
    // First calculation
    let clickSequence = Array.from(input1)
    for (let i = 0; i < clickSequence.length; i++) {
      fireEvent.click(getByText(buttonsElement, clickSequence[i]))
    }
    expect(displayElement.textContent).toBe(outputDisplay1)
    fireEvent.click(getByText(buttonsElement, BUTTON.OP_EQUALS))
    expect(displayElement.textContent).toBe(outputCalculation1)
    // console.log('test:', {
    //   input1,
    //   outputDisplay1,
    //   outputCalculation1,
    // })
  })
  it('Ignores operators within a negative number', async () => {
    // Inputs and xpectations
    const input1 = `-2${BUTTON.OP_MULTIPLY}-${BUTTON.OP_MULTIPLY}3${BUTTON.OP_MULTIPLY}-2`
    const outputDisplay1 = `0-2${BUTTON.OP_MULTIPLY}-3${BUTTON.OP_MULTIPLY}-2`
    const outputCalculation1 = '-12'
    // Run and test
    render(<Page />)
    const displayElement = screen.getByTestId(TESTID.DISPLAY)
    const buttonsElement = screen.getByTestId(TESTID.BUTTONS)
    // First calculation
    let clickSequence = Array.from(input1)
    for (let i = 0; i < clickSequence.length; i++) {
      fireEvent.click(getByText(buttonsElement, clickSequence[i]))
    }
    expect(displayElement.textContent).toBe(outputDisplay1)
    fireEvent.click(getByText(buttonsElement, BUTTON.OP_EQUALS))
    expect(displayElement.textContent).toBe(outputCalculation1)
    // console.log('test:', {
    //   input1,
    //   outputDisplay1,
    //   outputCalculation1,
    // })
  })
})
