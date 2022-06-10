
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Test Draw Button & Displayed div #choices', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)

    const choices = await driver.findElement(By.id('choices'))
    expect(By.id('choices')).toBeTruthy()
})

test('Does Add to Duo button display div #player-duo', async() => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)

    await driver.findElement(By.xpath('//div/button'))
    await driver.sleep(2000)
    expect(By.id('player-duo')).toBeTruthy()
})