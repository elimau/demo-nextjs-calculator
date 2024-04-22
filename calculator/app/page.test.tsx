import '@testing-library/jest-dom'
import { logRoles } from '@testing-library/dom'
import { render, screen } from '@testing-library/react'
import Page from './page'

describe('Page', () => {
  it('renders a heading', async () => {
    const { container } = render(<Page />)

    logRoles(container)
  })
})
