import { screen, render } from '@testing-library/react'

import { Image } from '../../Image'

describe('Test in <Image/>', () => {
  const defaultName = 'Default image.'

  const props = {
    url: 'https://images.pexels.com/photos/1545346/pexels-photo-1545346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Autumn season.',
    title: 'Photography 1.'
  }

  test('should have a default image', () => {
    render(<Image />)

    expect(screen.getByRole('img', { name: defaultName })).toHaveAttribute('src', 'undefined')
  })

  test('should doesn\'t show the caption is "noCaption" property is true', () => {
    const { rerender } = render(<Image />)

    const image = screen.getByText(defaultName)

    expect(image).toBeInTheDocument()

    rerender(<Image noCaption />)

    expect(image).not.toBeInTheDocument()
  })

  test('should have a custom image', () => {
    render(<Image {...props} />)

    expect(screen.getByRole('img', { name: props.alt })).toBeInTheDocument()
  })

  test('should have the title property', () => {
    render(<Image {...props} />)

    expect(screen.getByText(props.title)).toBeInTheDocument()
  })

  test('should have the alt property', () => {
    render(<Image {...props} />)

    expect(screen.getByText(props.alt)).toBeInTheDocument()
  })

  test('should have width style', () => {
    render(<Image {...props} width='350' />)

    expect(screen.getByRole('figure')).toHaveStyle({ 'max-width': '350px' })
  })
})
