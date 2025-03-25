const { I } = inject();
Feature('Usando AFV');

const timer = 50;

Scenario('Teste login', async () => {
    I.waitForElement('#br.com.flexmobile.afv:id/TFCnpj', timer);
    I.fillField('#br.com.flexmobile.afv:id/TFCnpj', '22222222222222');

    I.waitForElement('#br.com.flexmobile.afv:id/TFCdFunc', timer);
    I.fillField('#br.com.flexmobile.afv:id/TFCdFunc', '24');

    I.tap('#br.com.flexmobile.afv:id/BtnOk');

    I.waitForElement('#br.com.flexmobile.afv:id/edtLogin', timer);
    I.fillField('#br.com.flexmobile.afv:id/edtLogin', 'V24');

    I.waitForElement('#br.com.flexmobile.afv:id/edtSenha', timer);
    I.fillField('#br.com.flexmobile.afv:id/edtSenha', '1');

    I.tap('LOGIN');

    try {
        I.waitForElement('ATUALIZAR CREDENCIAIS', timer);
        I.tap('ATUALIZAR CREDENCIAIS');
    } catch (err) {
        console.log('Texto "ATUALIZAR CREDENCIAIS" não encontrado, seguindo com o fluxo normal.');
    }

 });
