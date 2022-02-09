import { Builder, By, Key } from "selenium-webdriver";
import { should } from "chai";
should();

//início do script

//usando describe e it do mocha
describe("Teste técnico QA Júnior", function () {
  it("Entra no site do youtube", async function () {
    let driver = await new Builder().forBrowser("firefox").build();
    //navegar até o site
    await driver.get("https://www.youtube.com");

    await driver.findElement(By.xpath('//*[@id="search-input"]')).click();
    await driver.switchTo().activeElement().sendKeys("D1 Jornadas Digitais");
    await driver.findElement(By.id('search-icon-legacy')).click();
  });
});