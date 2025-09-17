import { render, screen } from '@testing-library/react'
import App from './App'

it('renders the heading and button', () => {
	render(<App />)
	expect(screen.getByRole('heading', { name: /ahmed nawaz/i })).toBeInTheDocument()
	expect(screen.getByRole('button', { name: /increment count/i })).toBeInTheDocument()
})
