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
    //espera 1 segundo
    await driver.sleep(1000);
    //entra no canal
    await driver.findElement(By.css('a[href="/c/D1JornadasDigitais"]')).click();
    //entra na aba sobre
    await driver.findElement(By.css('tp-yt-paper-tab.style-scope:nth-child(12) > div:nth-child(1)')).click();
    //verificando com assertion o número de inscritos do canal
    let inscritos = await driver.findElement(By.id("subscriber-count"))
      .getText().then(function (valor) {
        return valor;
      });
    inscritos.should.equal('689 inscritos'); //melhorar
    //realizando o print
    /*await driver.takeScreenshot().then(function (dado) {
      var base64 = dado.replace(/^data:image\/png;base64,/, "");
      fs.writeFile("out.png", base64, 'base64', function (err) {
        if (err) {
          console.log(err);
        }
      })
    });*/
  });
}); 