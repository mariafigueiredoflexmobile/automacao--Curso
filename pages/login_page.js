const { I } = inject();

module.exports = {

  fields:{ //CAMPOS DE ENTRADA DO LOGIN
    email: '~email',
    password: '~senha'
  },

  buttons:{ //BOTÕES
    enter: '~entrar'
  },

  messages:{ //MENSAGEM DE ERRO
    loginError: "~lognFail"
  },


  doLogin(email, password) { //MÉTODO PARA REALIZAR O LOGIN
    I.fillField(this.fields.email,email)
    I.fillField(this.fields.password,password)
    I.tap(this.buttons.enter);
  },

  ckeckLoginError() { //MÉTODO PARA VERIFICAR O ERRO NO LOGIN
    I.waitForElement("~lognFail", 5);
    I.seeElement("~lognFail");
  }
};