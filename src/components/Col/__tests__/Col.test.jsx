import { render, screen } from '@testing-library/react'

import { Col } from '../../Col'

describe('Test in <Col/>', () => {
  test('should render correctly', () => {
    render(<Col data-testid='test-col' />)

    expect(screen.getByTestId('test-col')).toBeInTheDocument()
  })

  test('should render children correctly', () => {
    render(
      <Col>
        <p>children text</p>
      </Col>
    )

    expect(screen.getByText(/children text/i)).toBeInTheDocument()
  })

  test('should have all width properties', () => {
    render(<Col xs='12' xm='11' sm='10' mm='9' md='8' lg='7' hd='6' data-testid='test-col' />)

    expect(screen.getByTestId('test-col')).toHaveAttribute('xs', '12')

    expect(screen.getByTestId('test-col')).toHaveAttribute('xm', '11')

    expect(screen.getByTestId('test-col')).toHaveAttribute('sm', '10')

    expect(screen.getByTestId('test-col')).toHaveAttribute('mm', '9')

    expect(screen.getByTestId('test-col')).toHaveAttribute('md', '8')

    expect(screen.getByTestId('test-col')).toHaveAttribute('lg', '7')

    expect(screen.getByTestId('test-col')).toHaveAttribute('hd', '6')
  })
})
