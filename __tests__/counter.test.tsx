import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { Counter } from '@/components/counter'

describe('Counter Component', () => {
  it('should render with initial count of 0', () => {
    render(<Counter />)
    expect(screen.getByRole('button')).toHaveTextContent('Count is 0')
  })

  it('should increment count when clicked', () => {
    render(<Counter />)
    const button = screen.getByRole('button')
    
    fireEvent.click(button)
    expect(button).toHaveTextContent('Count is 1')
    
    fireEvent.click(button)
    expect(button).toHaveTextContent('Count is 2')
  })

  it('should have correct button attributes', () => {
    render(<Counter />)
    const button = screen.getByRole('button')
    
    expect(button).toBeInTheDocument()
    expect(button).toBeEnabled()
  })
})