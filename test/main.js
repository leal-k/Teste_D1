import { Builder, By } from "selenium-webdriver";
import { should } from "chai";
import { writeFile } from "fs";
//import { Sharp } from "sharp";
import pkg from 'sharp';
const { Sharp } = pkg;

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
    await driver.takeScreenshot().then(function (dado) {
      writeFile('imagem1.png', dado, 'base64', (err) => {
        if (err) throw err;
        console.log("Arquivo salvo");
      });
    });
    // try {
    //   var altura = 0, largura = 0, esq = 0, cima = 0;
    //   driver.findElement(By.id("meta")).getSize().then(size => {
    //     largura = size.width;
    //     altura = size.height;
    //   });
    //   (async function () {
    //     await driver.sleep(1000);
    //     Sharp('imagem1.png').extract({
    //       left: parseInt(esquerda),
    //       top: parseInt(cima),
    //       width: parseInt(largura),
    //       height: parseInt(altura)
    //     }).toFile('imagem1.png').then(function (novo_arquivo) {
    //       console.log("imagem cortada");
    //     }).catch(function (err) {
    //       if (err) console.log(err);
    //     })
    //   })
    // }
    // catch (err) {
    //   console.log("Erro: " + err);
    // }
  });
}); 