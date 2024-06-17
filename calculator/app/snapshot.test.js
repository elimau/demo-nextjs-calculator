import { render } from '@testing-library/react'
import Page from './page'

it('Renders calculator unchanged', () => {
  const { container } = render(<Page />)
  expect(container).toMatchSnapshot()
})
