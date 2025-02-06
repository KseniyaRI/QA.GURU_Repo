import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const URL_UI = 'https://realworld.qa.guru/';

function getUsername () {
  return faker.person.firstName();
};
const getEmail = function () {
  return faker.internet.email();
};

const getPassword = () => {
  faker.internet.password();
};

test('test', async ({ page }) => {
  //const username = faker.person.firstName();
  //const email = faker.internet.email();
  const username = getUsername();
  //const password = faker.internet.password();
  await page.goto(URL_UI);
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByPlaceholder('Your Name').click();
  await page.getByPlaceholder('Your Name').fill(username);
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(getEmail());
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(getPassword());
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByRole('main')).toContainText(username);
});