import { screen, render } from '@testing-library/react'
import { Link } from '../../Link'

describe('Test in <Link/>', () => {
  test('should render correctly', () => {
    render(<Link />)

    expect(screen.getByRole('link', /Default label to link/i)).toBeInTheDocument()
  })

  test('should have the "target" and "rel" properties', () => {
    render(<Link isExternal />)

    const element = screen.getByRole('link', /Default label to link/i)

    expect(element).toHaveAttribute('target', '_blank')

    expect(element).toHaveAttribute('rel', 'noopener')
  })

  test('should have a custom class', () => {
    render(<Link addClass='u-text-secondary-200' />)

    expect(screen.getByRole('link', /Default label to link/i)).toHaveClass('u-text-secondary-200')
  })
})
