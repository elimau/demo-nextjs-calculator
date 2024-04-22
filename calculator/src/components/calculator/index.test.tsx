import { fireEvent, getByText, render, screen } from '@testing-library/react'
import {
  BUTTON,
  BUTTON_LABEL,
  DISPLAY_ERROR,
  DISPLAY_INFINITY,
  TESTID,
} from './constants'
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

    // Second calculation
    clickSequence = Array.from(input2)
    for (let i = 0; i < clickSequence.length; i++) {
      fireEvent.click(getByText(buttonsElement, clickSequence[i]))
    }
    expect(displayElement.textContent).toBe(outputDisplay2)
    fireEvent.click(getByText(buttonsElement, BUTTON.OP_EQUALS))
    expect(displayElement.textContent).toBe(outputCalculation2)
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
    // Click AC
    fireEvent.click(getByText(buttonsElement, BUTTON_LABEL.OP_AC))
    expect(displayElement.textContent).toBe(outputAfterClickAc)

    // Second calculation
    clickSequence = Array.from(input2)
    for (let i = 0; i < clickSequence.length; i++) {
      fireEvent.click(getByText(buttonsElement, clickSequence[i]))
    }
    expect(displayElement.textContent).toBe(outputDisplay2)
    fireEvent.click(getByText(buttonsElement, BUTTON.OP_EQUALS))
    expect(displayElement.textContent).toBe(outputCalculation2)
  })

  it('On clicking multiple operation buttons, it will only keep the first operation and ignore the rest of the operation clicks, except minus just before the number (which is a negative number)', async () => {
    // Inputs and expectations
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
    // Inputs and expectations
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
  })
  it('Ignores operators within a negative number', async () => {
    // Inputs and expectations
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
  })
  it('If "Infinity", it ignores all buttons except AC', async () => {
    // Inputs and expectations
    const input1 = `6${BUTTON.OP_DIVIDE}0`
    const outputDisplay1 = `6${BUTTON.OP_DIVIDE}0`
    const outputCalculation1 = DISPLAY_INFINITY
    const input2 = `${BUTTON.OP_DIVIDE}60${BUTTON.OP_MINUS}`
    const outputDisplay2 = DISPLAY_INFINITY
    const input3 = `${BUTTON_LABEL.OP_AC}`
    const outputDisplay3 = `0`

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

    // Second inputs
    clickSequence = Array.from(input2)
    for (let i = 0; i < clickSequence.length; i++) {
      fireEvent.click(getByText(buttonsElement, clickSequence[i]))
    }
    expect(displayElement.textContent).toBe(outputDisplay2)

    // Third inputs - AC click
    const x = getByText(buttonsElement, input3)
    fireEvent.click(getByText(buttonsElement, input3))
    expect(displayElement.textContent).toBe(outputDisplay3)
  })

  it('If "Error", it ignores all buttons except AC', async () => {
    // Inputs and expectations
    const input1 = `6${BUTTON.OP_DIVIDE}${BUTTON.OP_EQUALS}`
    const outputDisplay1 = DISPLAY_ERROR
    const input2 = `${BUTTON_LABEL.OP_AC}`
    const outputDisplay2 = `0`

    // Run and test
    // Simulate the display to show error (rather than some simulated way or)
    render(<Page initialDisplayValue={DISPLAY_ERROR} />)
    const displayElement = screen.getByTestId(TESTID.DISPLAY)
    const buttonsElement = screen.getByTestId(TESTID.BUTTONS)

    // Click all sorts of buttons which are ignored
    let clickSequence = Array.from(input1)
    for (let i = 0; i < clickSequence.length; i++) {
      fireEvent.click(getByText(buttonsElement, clickSequence[i]))
    }
    expect(displayElement.textContent).toBe(outputDisplay1)

    // Do AC click
    fireEvent.click(getByText(buttonsElement, input2))
    expect(displayElement.textContent).toBe(outputDisplay2)
  })

  it('Ignore "=" button press if the previous character is an operator or dot', async () => {
    // todo
    // Inputs and expectations
    const outputDisplayAfterAc = `0`
    const input1 = `6${BUTTON.OP_DIVIDE}${BUTTON.OP_EQUALS}`
    const outputDisplay1 = `6${BUTTON.OP_DIVIDE}`
    const input2 = `6${BUTTON.OP_DIVIDE}${BUTTON.NUM_DOT}${BUTTON.OP_EQUALS}`
    const outputDisplay2 = `6${BUTTON.OP_DIVIDE}${BUTTON.NUM_DOT}`

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
    // All clear
    fireEvent.click(getByText(buttonsElement, BUTTON_LABEL.OP_AC))
    expect(displayElement.textContent).toBe(outputDisplayAfterAc)

    // Second inputs
    clickSequence = Array.from(input2)
    for (let i = 0; i < clickSequence.length; i++) {
      fireEvent.click(getByText(buttonsElement, clickSequence[i]))
    }
    expect(displayElement.textContent).toBe(outputDisplay2)
    // All clear
    fireEvent.click(getByText(buttonsElement, BUTTON_LABEL.OP_AC))
    expect(displayElement.textContent).toBe(outputDisplayAfterAc)
  })
})
