import { render } from '@testing-library/react'
import Page from '../app/z.testpage'

it.skip('renders homepage unchanged', () => {
  const { container } = render(<Page />)
  expect(container).toMatchSnapshot()
})
