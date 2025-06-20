import { describe, it, expect } from 'vitest'
import { siteConfig } from '@/config/site'

describe('Site Configuration', () => {
  it('should have correct site name', () => {
    expect(siteConfig.name).toBe('Next.js + HeroUI')
  })

  it('should have correct description', () => {
    expect(siteConfig.description).toBe('Make beautiful websites regardless of your design experience.')
  })

  it('should have navigation items', () => {
    expect(siteConfig.navItems).toHaveLength(5)
    expect(siteConfig.navItems[0]).toEqual({
      label: 'Home',
      href: '/',
    })
  })

  it('should have valid links', () => {
    expect(siteConfig.links.github).toBe('https://github.com/heroui-inc/heroui')
    expect(siteConfig.links.docs).toBe('https://heroui.com')
  })
})