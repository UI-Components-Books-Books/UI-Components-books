import { screen, render } from '@testing-library/react'

import { Icon } from '../../Icon'
import { iconList } from '../../../utils/icons/iconsList'

describe('Test in <Icon/>', () => {
  const [close] = iconList

  test('should render correctly', () => {
    render(<Icon name={close} />)

    expect(screen.getByTestId(`${close}`)).toBeInTheDocument()
  })

  test('should show "doesn\'t exist" if the icon doesn\'t exist', () => {
    // Silenciamos el error producido por los propTypes.
    const originalError = console.error
    console.error = jest.fn()

    render(<Icon name='undefined' />)

    expect(screen.getByText('Doesn\'t exist')).toBeTruthy()

    console.error = originalError
  })

  test('should have the "c-small" class if the size property is "small"', () => {
    render(<Icon name={close} size='small' />)

    expect(screen.getByTestId(`${close}`)).toHaveClass('c-small')
  })

  test('should have the "c-normal" class if the size property is "normal"', () => {
    render(<Icon name={close} size='normal' />)

    expect(screen.getByTestId(`${close}`)).toHaveClass('c-normal')
  })

  test('should have the "c-big" class if the size property is "big"', () => {
    render(<Icon name={close} size='big' />)

    expect(screen.getByTestId(`${close}`)).toHaveClass('c-big')
  })
})
