import { test, expect } from '@playwright/test'

test.describe('Navbar navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('navbar renders the site name', async ({ page }) => {
    await expect(page.locator('nav').first().getByText(/Michel Cano/)).toBeVisible()
  })

  test('navbar becomes opaque after scrolling down', async ({ page }) => {
    // Initially transparent
    const header = page.locator('header')
    await expect(header).toHaveClass(/bg-transparent/)

    // Scroll down past the threshold
    await page.evaluate(() => window.scrollTo(0, 200))
    await expect(header).toHaveClass(/bg-slate-900/)
  })

  test('clicking Experience nav link scrolls to the section', async ({ page }) => {
    await page.getByRole('button', { name: 'Experience' }).first().click()
    await expect(page.locator('#experience')).toBeInViewport({ ratio: 0.3 })
  })

  test('clicking Skills nav link scrolls to the section', async ({ page }) => {
    await page.getByRole('button', { name: 'Skills' }).first().click()
    await expect(page.locator('#skills')).toBeInViewport({ ratio: 0.3 })
  })

  test('clicking Portfolio nav link scrolls to the section', async ({ page }) => {
    await page.getByRole('button', { name: 'Portfolio' }).first().click()
    await expect(page.locator('#portfolio')).toBeInViewport({ ratio: 0.3 })
  })

  test('clicking About nav link scrolls to the section', async ({ page }) => {
    await page.getByRole('button', { name: 'About' }).first().click()
    await expect(page.locator('#about')).toBeInViewport({ ratio: 0.3 })
  })

  test('clicking Contact nav link scrolls to the section', async ({ page }) => {
    await page.getByRole('button', { name: 'Contact' }).first().click()
    await expect(page.locator('#contact')).toBeInViewport({ ratio: 0.3 })
  })

  test('mobile hamburger menu opens and closes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/')

    // Desktop nav not visible on mobile
    const mobileToggle = page.locator('header button').last()
    await expect(mobileToggle).toBeVisible()

    // Open mobile menu
    await mobileToggle.click()
    await expect(page.getByRole('button', { name: 'Experience' }).last()).toBeVisible()

    // Close mobile menu by clicking a link
    await page.getByRole('button', { name: 'About' }).last().click()
    await expect(page.locator('#about')).toBeInViewport({ ratio: 0.1 })
  })
})
