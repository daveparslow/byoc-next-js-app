import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Home from '@/app/page'

// Mock the external dependencies
vi.mock('@heroui/link', () => ({
  Link: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>{children}</a>
  ),
}))

vi.mock('@heroui/snippet', () => ({
  Snippet: ({ children, ...props }: any) => (
    <div {...props}>{children}</div>
  ),
}))

vi.mock('@heroui/code', () => ({
  Code: ({ children, ...props }: any) => (
    <code {...props}>{children}</code>
  ),
}))

describe('Home Page', () => {
  it('should render main heading text', () => {
    render(<Home />)
    
    expect(screen.getByText('Make')).toBeInTheDocument()
    expect(screen.getByText('beautiful')).toBeInTheDocument()
    expect(screen.getByText('websites regardless of your design experience.')).toBeInTheDocument()
  })

  it('should render subtitle', () => {
    render(<Home />)
    
    expect(screen.getByText('Beautiful, fast and modern React UI library.')).toBeInTheDocument()
  })

  it('should render documentation and github links', () => {
    render(<Home />)
    
    expect(screen.getByText('Documentation')).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
  })

  it('should render getting started snippet', () => {
    render(<Home />)
    
    expect(screen.getByText('Get started by editing')).toBeInTheDocument()
    expect(screen.getByText('app/page.tsx')).toBeInTheDocument()
  })
})