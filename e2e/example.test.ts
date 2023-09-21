import { test, expect } from '@playwright/test'
import { injectAxe, checkA11y } from 'axe-playwright'

test('should show the templates section', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/fr')
  await expect(page.getByText('Hackathon')).toBeVisible()
})

test('should not have accessibility violations', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/fr')

  await injectAxe(page)

  await checkA11y(page, {
    detailedReport: true,
    detailedReportOptions: { html: true },
  })
})
