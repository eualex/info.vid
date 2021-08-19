import { render } from '@testing-library/react'
import { Header } from '.'

describe('Header Component', () => {
  it('should render correctly', () => {
    const { container } = render(<Header />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
