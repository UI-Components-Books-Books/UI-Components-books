import { render, screen } from '@testing-library/react'
import { Button } from '../../Button'

describe('Test in <Button/>', () => {
  test('should render correctly', () => {
    render(<Button />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('should have aria-label attribute', () => {
    render(<Button label='delete' hasAriaLabel />)

    expect(screen.getByRole('button', { 'aria-label': /delete/i })).toBeInTheDocument()
  })

  test('should be disabled', () => {
    render(<Button disabled />)

    expect(screen.getByRole('button')).toBeDisabled()
  })

  test('should render with icon correctly', () => {
    render(<Button label='play' icon={{ path: '/assets/icons/svg/play.svg' }} />)

    expect(screen.getByRole('button', { path: /play/i })).toContainElement(screen.getByTestId(/play/i))
  })

  test('Should have the class "c-reverse" if the icon position is right', () => {
    render(<Button icon={{ path: '/assets/icons/svg/play.svg', position: 'right' }} />)

    expect(screen.getByRole('button')).toHaveClass('c-reverse')
  })
})
