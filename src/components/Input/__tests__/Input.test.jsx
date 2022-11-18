import { screen, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Input, InputGroup, InputStyle, InputLeftAddon, InputRightAddon } from '../../../components'

describe('Test in <Input/>', () => {
  test('should render elements inside correctly', () => {
    render(
      <InputStyle>
        <InputLeftAddon>
          <span>Hello</span>
        </InputLeftAddon>
        <Input />
        <InputRightAddon>
          <span>Test</span>
        </InputRightAddon>
      </InputStyle>
    )

    expect(screen.getByText(/Hello/i)).toBeInTheDocument()
    expect(screen.getByText(/Test/i)).toBeInTheDocument()
  })

  test('should be disabled', () => {
    render(<Input isDisabled />)

    expect(screen.getByRole('textbox', { name: 'Default input label' })).toBeDisabled()
  })

  test('should have custom label', () => {
    const label = 'This is a custom label'

    render(<Input label={label} isLabelVisible />)

    expect(screen.getByRole('textbox', { name: label })).toBeInTheDocument()
  })

  test('should have "aria-readonly" property', () => {
    render(<Input isReadOnly />)

    expect(screen.getByRole('textbox')).toHaveAttribute('aria-readonly', 'true')
  })

  test('should return an object with id and value properties when the input changes', async () => {
    let data

    const onAllValue = (value) => {
      data = [...value]
    }

    const [args1, args2] = [
      {
        id: 'input-test-id-1',
        value: 'value-test',
        label: 'input-1'
      },
      {
        id: 'input-test-id-2',
        label: 'input-2'
      }
    ]

    render(
      <InputGroup onAllValue={onAllValue}>
        <Input {...args1} />
        <Input {...args2} />
      </InputGroup>
    )

    await userEvent.type(screen.getByRole('textbox', { name: args1.label }), '-1')

    await userEvent.type(screen.getByRole('textbox', { name: args2.label }), 'value-test-2')

    await waitFor(() => {
      expect(data).toEqual([
        {
          id: args1.id,
          value: `${args1.value}-1`
        },
        {
          id: args2.id,
          value: 'value-test-2'
        }
      ])
    })
  })
})
