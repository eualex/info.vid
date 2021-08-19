import { render } from '@testing-library/react'
import { MenuAside } from '.'

describe('MenuAside Component', () => {
  it('should render correctly', () => {
    const { container } = render(<MenuAside />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
