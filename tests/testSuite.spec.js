// @ts-check
const { test, expect } = require('@playwright/test');
import {HomePage} from '../pages/HomePage.js';
import {AppsPage} from '../pages/AppsPage.js';
import {SearchPage} from '../pages/SearchPage.js';


test('App added to favorites', async ({ page }) => {
  await page.goto('/');
  const homePage = new HomePage(page);
  const appsPage = new AppsPage(page);  
  await homePage.moveToTabPage('Apps');
  await appsPage.addAppToFavorite('BBC Sounds');
  await expect(page.locator(await homePage.appIsInFavorites('BBC Sounds'))).toBeVisible();
});


test('App removed from favorites', async ({ page }) => {
  await page.goto('/');
  const homePage = new HomePage(page);
  await homePage.moveToFavoriteApp('Netflix');
  await homePage.removeFormFavorites();
  await expect(page.locator(await homePage.appRemovedFavorites('Netflix'))).toHaveCount(0);
});

test('Search cattegory', async ({ page }) => {
  await page.goto('/');
  const homePage = new HomePage(page);
  const searchPage = new SearchPage(page);    
  await homePage.moveToSearchTab();
  await searchPage.searchCategory('Action');
  console.log(page.locator(await searchPage.verifySearchResult('Action')).count())
  
  await expect(await page.locator(await searchPage.verifySearchResult('Action')).count()).toBeGreaterThan(0);
});