import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { CheckBox, CheckBoxGroup } from '../../CheckBox'

describe('Test in <CheckBox/>', () => {
  const defaultLabel = 'Default checkbox label'

  test('should render correctly', () => {
    render(<CheckBox />)

    expect(screen.getByText(defaultLabel)).toBeInTheDocument()
  })

  test('should be the checkbox is checked if the "defaultChecked" property is truthy', () => {
    render(<CheckBox defaultChecked />)

    expect(screen.getByRole('checkbox', { name: defaultLabel })).toBeChecked()
  })

  test('should be disabled', () => {
    render(<CheckBox isDisabled />)

    expect(screen.getByRole('checkbox', { name: defaultLabel })).toBeDisabled()
  })

  test('should have "right" state', async () => {
    render(<CheckBox state='right' />)

    const checkbox = screen.getByRole('checkbox', { name: defaultLabel })

    await userEvent.click(checkbox)

    expect(checkbox).toHaveAttribute('data-state', 'right')
  })

  test('should have "normal" state', async () => {
    render(<CheckBox state='normal' />)

    const checkbox = screen.getByRole('checkbox', { name: defaultLabel })

    await userEvent.click(checkbox)

    expect(checkbox).toHaveAttribute('data-state', 'normal')
  })

  test('should have "wrong" state', async () => {
    render(<CheckBox state='wrong' />)

    const checkbox = screen.getByRole('checkbox', { name: defaultLabel })

    await userEvent.click(checkbox)

    expect(checkbox).toHaveAttribute('data-state', 'wrong')
  })

  test('should have custom label', () => {
    const label = 'This is a custom label'

    render(<CheckBox label={label} />)

    expect(screen.getByRole('checkbox', { name: label })).toBeInTheDocument()
  })

  test('should be "radio" type', () => {
    render(<CheckBox type='radio' />)

    expect(screen.getByRole('radio', { name: defaultLabel })).toBeInTheDocument()
  })

  test('should return the onChange property an object with id and value properties', async () => {
    const params = {
      id: 'checkbox-test-id',
      value: 'value-test'
    }

    render(<CheckBox onChange={onCheck} {...params} />)

    await userEvent.click(screen.getByRole('checkbox', { name: defaultLabel }))

    function onCheck (object) {
      expect(object).toEqual({ id: params.id, value: params.value })
    }
  })

  test('should return an object with id and value properties when the checkboxes are checked', async () => {
    let data

    const onChecked = (value) => {
      data = [...value]
    }

    const [args1, args2] = [
      {
        id: 'checkbox-test-id-1',
        value: 'value-test-1',
        label: 'checkbox-1'
      },
      {
        id: 'checkbox-test-id-2',
        value: 'value-test-2',
        label: 'checkbox-2'
      }
    ]

    render(
      <CheckBoxGroup legend='Test group' onChecked={onChecked}>
        <CheckBox {...args1} />
        <CheckBox {...args2} />
        <CheckBox />
      </CheckBoxGroup>
    )

    await userEvent.click(screen.getByRole('checkbox', { name: args1.label }))

    await userEvent.click(screen.getByRole('checkbox', { name: args2.label }))

    await userEvent.click(screen.getByRole('checkbox', { name: defaultLabel }))

    await userEvent.click(screen.getByRole('checkbox', { name: defaultLabel }))

    await waitFor(() => {
      expect(data).toEqual([
        {
          id: args1.id,
          value: args1.value
        },
        {
          id: args2.id,
          value: args2.value
        }
      ])
    })
  })
})
