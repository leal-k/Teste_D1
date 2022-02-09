import { Builder, By } from "selenium-webdriver";
import { should } from "chai";
import { WebDriver } from "selenium-webdriver";
should();

//início do script
var driver;
//usando describe e it do mocha
describe("Teste técnico QA Júnior", function () {
  driver = new Builder().forBrowser("firefox").build();
  it("Entra no site do youtube", async function () {
    //navegar até o site
    await driver.get("https://www.youtube.com");
    // acha a barra de pesquisa
    await driver.findElement(By.id('search-input')).click();
    //digita na barra 'D1 Jornadas Digitais'
    await driver.switchTo().activeElement().sendKeys("D1 Jornadas Digitais");
    //clica no botão de pesquisar
    await driver.findElement(By.id('search-icon-legacy')).click();
    await driver.sleep(3000);
    // espera = WebDriverWait(driver, 1000).until(EC.element_to_be_clickable(By.xpath('//*[@id="img"]')));
    // espera.location_once_scrolled_into_view;
    // espera.click();
    await driver.findElement(By.css('a[href="/c/D1JornadasDigitais"]')).click();

  });
}); 