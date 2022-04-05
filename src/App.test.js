import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

TextDecoderStream('render withou crashing', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText(/Search countries/i)
    expect(linkElement).toBeInTheDocument()
})