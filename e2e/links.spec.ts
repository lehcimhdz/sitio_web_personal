import { test, expect } from '@playwright/test'

test.describe('Social links and project links', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('GitHub link in hero opens in new tab', async ({ page }) => {
    const githubLink = page.locator('#home a[href*="github.com"]').first()
    await expect(githubLink).toHaveAttribute('target', '_blank')
    await expect(githubLink).toHaveAttribute('rel', /noopener/)
  })

  test('LinkedIn link in hero opens in new tab', async ({ page }) => {
    const linkedinLink = page.locator('#home a[href*="linkedin.com"]').first()
    await expect(linkedinLink).toHaveAttribute('target', '_blank')
    await expect(linkedinLink).toHaveAttribute('rel', /noopener/)
  })

  test('email CTA link has correct href', async ({ page }) => {
    const emailLink = page.locator('a[href="mailto:bmichelcano@gmail.com"]').first()
    await expect(emailLink).toBeAttached()
  })

  test('contact section has LinkedIn and GitHub links', async ({ page }) => {
    await page.locator('#contact').scrollIntoViewIfNeeded()
    await expect(page.locator('#contact a[href*="linkedin.com"]')).toBeVisible()
    await expect(page.locator('#contact a[href*="github.com"]')).toBeVisible()
  })

  test('portfolio project links are present', async ({ page }) => {
    await page.locator('#portfolio').scrollIntoViewIfNeeded()
    const projectLinks = page.locator('#portfolio a[href]')
    await expect(projectLinks.first()).toBeAttached()
    const count = await projectLinks.count()
    expect(count).toBeGreaterThanOrEqual(4) // at least 4 real project links
  })

  test('global-trade-aws project link points to GitHub', async ({ page }) => {
    await page.locator('#portfolio').scrollIntoViewIfNeeded()
    const link = page.locator('#portfolio a[href*="global-trade-aws"]')
    await expect(link).toHaveAttribute('href', /github\.com/)
  })

  test('legismex project link points to GitHub', async ({ page }) => {
    await page.locator('#portfolio').scrollIntoViewIfNeeded()
    const link = page.locator('#portfolio a[href="https://github.com/lehcimhdz/legismex"]')
    await expect(link).toHaveAttribute('href', /github\.com/)
  })

  test('footer scroll-to-top button is visible', async ({ page }) => {
    await page.locator('footer').scrollIntoViewIfNeeded()
    await expect(page.locator('footer button')).toBeVisible()
  })

  test('scroll-to-top button scrolls back to top', async ({ page }) => {
    // Scroll to bottom first
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.locator('footer button').click()
    await expect(page.locator('#home')).toBeInViewport({ ratio: 0.5 })
  })
})
