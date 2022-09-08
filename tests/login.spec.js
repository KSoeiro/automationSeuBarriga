const { test, expect } = require('@playwright/test');
 
test.beforeEach(async ({ page }) => {
    await page.goto('https://seubarriga.wcaquino.me/login')
})

test('Login with success', async ({ page }) => {
    await page.locator('id=email').fill('teste123@mail.com');
    await page.locator('id=senha').fill('teste123');
    await page.click('text=Entrar');
    await expect(page).toHaveURL('https://seubarriga.wcaquino.me/logar');
    const alertMessage = await page.innerText('.alert')
    await expect(alertMessage).toBe('Bem vindo, teste!')
})

test('Login with invalid password', async ({ page }) => {
    await page.locator('id=email').fill('teste123@mail.com');
    await page.locator('id=senha').fill('teste');
    await page.click('text=Entrar');
    const alertMessage = await page.innerText('.alert')
    await expect(alertMessage).toBe('Problemas com o login do usuário')
})

test('Login withou filling in the fields', async ({ page }) => {
    await page.click('text=Entrar');
    const alertMessageEmail = await page.innerText('.alert:nth-child(2)')
    expect(alertMessageEmail).toBe('Email é um campo obrigatório')
    const alertMessageSenha = await page.innerText('.alert:nth-child(3)')
    expect(alertMessageSenha).toBe('Senha é um campo obrigatório')
})