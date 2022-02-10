# Teste_D1
## Teste técnico feito para cargo de QA Júnior na Empresa D1.

- Código feito em JavaScript utilizando Selenium, Mocha e Chai. <br>
- A finalidade do teste era, além da avaliação para cargo júnior de QA, aprofundar o conhecimento e aprender novas tecnologias.
- O prazo do teste foi de 3 dias e foi usado todo o prazo para a finalização do projeto. <br>
## Descrição do código:
- No início é feita 3 importações para o bom funcionamento do código, do selenium-webdriver, chai para assertion e fs para acessso a arquivos.
- É utilizado também o **describe** e **it** do mocha no script para separar o código.
- No **describe** é criada a instância do firefox, que rodará toda a automatização.
- No **it**, que contém o processo principal, é dividida as seções que cada código faz, desde entrar no site do youtube até realizar a screenshot.
- Também é realizada um await.sleep no meio para não ficar muito acelerado o script.
- No final, após salvar a imagem da screenshot, é printado no console uma confirmação que a imagem foi salva.
