import { screen, render } from '@testing-library/react'

import { Content } from '../../Content'

describe('Test in <Content/>', () => {
  test('should render correctly', () => {
    render(<Content data-testid='content-test' />)

    expect(screen.getByTestId('content-test')).toBeInTheDocument()
  })

  test('should render children correctly', () => {
    render(
      <Content>
        <p>test text</p>
      </Content>
    )

    expect(screen.getByText(/test text/i)).toBeInTheDocument()
  })

  test('should have a custom class', () => {
    render(<Content addClass='u-mx-2' data-testid='content-test' />)

    expect(screen.getByTestId('content-test')).toHaveClass('u-mx-2')
  })
})
