import { screen, render } from '@testing-library/react'

import { Kbd } from '../../Kbd'

describe('Test in <Kbd/>', () => {
  test('should render children correctly', () => {
    render(<Kbd>ctrl</Kbd>)

    expect(screen.getByText(/ctrl/i)).toBeInTheDocument()
  })
})
