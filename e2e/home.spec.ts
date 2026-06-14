import { test, expect } from '@playwright/test'

test.describe('Page load and section visibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('page title is correct', async ({ page }) => {
    await expect(page).toHaveTitle(/Michel Cano/)
  })

  test('hero section is visible on load with the rewritten headline', async ({ page }) => {
    const heading = page.getByRole('heading', { level: 1 })
    await expect(heading).toBeVisible()
    await expect(heading).toContainText(/Backend engineer/i)
  })

  test('all main sections exist in the DOM', async ({ page }) => {
    const sections = ['#home', '#experience', '#skills', '#portfolio', '#about', '#contact']
    for (const id of sections) {
      await expect(page.locator(id)).toBeAttached()
    }
  })

  test('experience section heading is visible after scrolling', async ({ page }) => {
    await page.locator('#experience').scrollIntoViewIfNeeded()
    await expect(page.getByRole('heading', { name: /^Work$/i })).toBeVisible()
  })

  test('skills section heading is visible after scrolling', async ({ page }) => {
    await page.locator('#skills').scrollIntoViewIfNeeded()
    await expect(page.getByRole('heading', { name: /^Stack$/i })).toBeVisible()
  })

  test('portfolio section heading is visible after scrolling', async ({ page }) => {
    await page.locator('#portfolio').scrollIntoViewIfNeeded()
    await expect(page.getByRole('heading', { name: /^Projects$/i })).toBeVisible()
  })

  test('contact section heading is visible after scrolling', async ({ page }) => {
    await page.locator('#contact').scrollIntoViewIfNeeded()
    await expect(page.getByRole('heading', { name: /^Contact$/i })).toBeVisible()
  })

  test('footer is present', async ({ page }) => {
    await page.locator('footer').scrollIntoViewIfNeeded()
    await expect(page.locator('footer')).toBeVisible()
    await expect(page.getByText(/Michel Cano Hernández/)).toBeVisible()
  })
})
