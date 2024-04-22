// import '@testing-library/jest-dom'
// import '@testing-library/dom'
import { logRoles } from '@testing-library/dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/testpage'

describe('Page', () => {
  it('renders a heading', async () => {
    const { container } = render(<Page />)

    // DEBUGGING
    // console.log('screen', screen)
    // screen.debug()
    // screen.logTestingPlaygroundURL()

    let element
    element = screen.getByTestId('example_div')
    console.log('element', element)
    // https://www.w3schools.com/jsref/prop_node_textcontent.asp
    console.log('element.textContent', element.textContent)
    // screen.debug(element)
    // console.log(element)
    expect(element.textContent).toBe('Example div')

    // Note: For some weird reason, only selecting by test id works. (getByRole,logRoles does not work)
    // The error I was getting: SyntaxError: '*[role~="heading"],h1,h2,h3,h4,h5,h6' is not a valid selector
    // I was getting all sorts of errors for different query selectors. Not of them were working except getByTestId
    // On the Next day...
    // I found that someone else had this problem.
    // https://github.com/jsdom/jsdom/issues/3706
    // I reinstalled jest-environment-jsdom and it mysteriously worked. Double checked by: rm node_modules and package-lock.json and it still works now.
    // It is no longer around. I think something fixed it overnight!!
    logRoles(container)
    screen.getByRole('heading', {
      name: /Home/i,
    })
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })
})
