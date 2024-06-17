import { render } from '@testing-library/react'
import Page from '../app/z.testpage'

describe.skip('TestPage', () => {
  it('page snapshot matches', () => {
    const { container } = render(<Page />)
    expect(container).toMatchSnapshot()
  })
})
