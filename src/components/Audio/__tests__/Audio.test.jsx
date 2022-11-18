import { render, screen } from '@testing-library/react'
import { Audio } from '../../../components/Audio'

describe('Test in <Audio/>', () => {
  test('should render correctly', () => {
    render(<Audio type='Button' />)

    expect(screen.getByRole('button', { name: /Reproduccir/i })).toBeInTheDocument()
  })

  test('should render correctly if the type is “Bar“', () => {
    render(<Audio type='Bar' data-testid='test-bar' />)

    expect(screen.getByTestId('test-bar')).toBeInTheDocument()
  })

  test('should have “c-audio--small” class with the size property change', () => {
    render(<Audio data-testid='test-audio' size='small' />)

    expect(screen.getByTestId('test-audio')).toHaveClass('c-audio--small')
  })

  test('should hide with a11y property', () => {
    render(<Audio type='Button' a11y />)

    expect(screen.getByRole('button', { name: /Reproduccir/i })).toHaveAttribute('data-a11y', 'true')
  })
})
