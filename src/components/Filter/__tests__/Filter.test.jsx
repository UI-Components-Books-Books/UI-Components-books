import { screen, render } from '@testing-library/react'

import { Filter } from '../../Filter'

describe('Test in <Filter/>', () => {
  test('should render correctly', () => {
    render(<Filter data-testid='filter-test-id' />)

    expect(screen.getByTestId('filter-test-id')).toBeInTheDocument()
  })
})
