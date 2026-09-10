import { fireEvent, render, screen } from '@testing-library/react'
import { appConfig } from '@/app.config'
import { HomePage } from './home'

test('shows the app name', () => {
  render(<HomePage />)
  expect(
    screen.getByRole('heading', { name: appConfig.name }),
  ).toBeInTheDocument()
})

test('shows the teeth illustration after clicking the button', () => {
  render(<HomePage />)

  expect(
    screen.queryByRole('img', { name: /tanden met een beugel/i }),
  ).not.toBeInTheDocument()

  fireEvent.click(screen.getByRole('button', { name: 'Hallo, wereld' }))

  expect(
    screen.getByRole('img', { name: /tanden met een beugel/i }),
  ).toBeInTheDocument()
})
