Feature('login');

Scenario('Login with sucess',  ( I ) => {
    //fill email field
    I.fillField('~email','teste@teste.com')
    //fill password field
    I.fillField('~senha','123456')
   //fill on enter
  // I.waitForElement("~entrar", 10); // Espera até 10 segundos pelo botão
   //I.seeElement("~entrar"); // Verifica se o botão está visível
 // Aguarda o botão "entrar" estar visível
    
 // Clica no botão "entrar"
 //I.tap("//android.view.ViewGroup[@content-desc='entrar']");
    I.tap('~entrar')


    I.waitForElement('~salvar', 5)
    I.seeElement('~salvar')
   	//android.view.ViewGroup[@content-desc="entrar"]
   
    //check
    //I.waitForElement('~codigo', 5)
    //I.seeElement('~codigo')
   ///android.view.ViewGroup[@content-desc="salvar"]/android.view.ViewGroup
   //~codigo

});
