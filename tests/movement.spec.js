const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://seubarriga.wcaquino.me/login')
    await page.locator('id=email').fill('teste123@mail.com');
    await page.locator('id=senha').fill('teste123');
    await page.click('text=Entrar');
    await expect(page).toHaveURL('https://seubarriga.wcaquino.me/logar');
})
 
test('Create a movement', async ({ page }) => {
    await page.locator('text=Criar Movimentação').click();
    await expect(page).toHaveURL('https://seubarriga.wcaquino.me/movimentacao');
    await page.locator('input[name="data_transacao"]').fill('21/06/2022');
    await page.locator('input[name="data_pagamento"]').fill('21/06/2023');
    await page.locator('input[name="descricao"]').fill('teste');
    await page.locator('input[name="interessado"]').fill('teste');
    await page.locator('input[name="valor"]').fill('1234');
    await page.locator('text=Pago').click();
    await page.locator('text=Salvar').click();
    const alertMessageSenha = await page.innerText('.alert')
    expect(alertMessageSenha).toBe('Movimentação criada com sucesso!')
})