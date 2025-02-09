import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage } from '../sources/pages/mainPage';
import { RegisterPage } from '../sources/pages/registerPage';


const URL_UI = 'https://realworld.qa.guru/';

test('Пользователь может авторизоваться с корректным логином и корректным паролем', async ({
  page 
}) => {
  const user = {
    username: faker.person.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 10 })
  }
  const mainPage = new MainPage(page);
  const registerPage = new RegisterPage(page);

  await mainPage.open(URL_UI);
  await mainPage.gotoRegister();
  await registerPage.register();

  // await expect(page.getByRole('main')).toContainText(username);
});

/*
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


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://realworld.qa.guru/');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).fill('1');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('1@mail.ru');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('1');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.getByRole('button', { name: 'Global Feed' }).click();
  await page.getByRole('link', { name: ' New Article' }).click();
  await page.getByRole('textbox', { name: 'Article Title' }).click();
  await page.getByRole('textbox', { name: 'Article Title' }).fill('123');
  await page.getByRole('textbox', { name: 'What\'s this article about?' }).click();
  await page.getByRole('textbox', { name: 'What\'s this article about?' }).fill('123');
  await page.getByRole('textbox', { name: 'Write your article (in' }).click();
  await page.getByRole('textbox', { name: 'Write your article (in' }).fill('123');
  await page.getByRole('textbox', { name: 'Enter tags' }).click();
  await page.getByRole('textbox', { name: 'Enter tags' }).fill('123');
  await page.getByRole('button', { name: 'Publish Article' }).click();
  await page.getByRole('textbox', { name: 'Article Title' }).click();
  await page.getByRole('textbox', { name: 'Article Title' }).fill('123kr');
  await page.getByRole('button', { name: 'Publish Article' }).click();
});

*/