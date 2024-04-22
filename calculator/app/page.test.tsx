import '@testing-library/jest-dom'
import { logRoles } from '@testing-library/dom'
import { render, screen } from '@testing-library/react'
import Page from './page'

describe('Page', () => {
  it('Renders correct heading', async () => {
    render(<Page />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Calculator')
  })
})
