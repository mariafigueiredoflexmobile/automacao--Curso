const { checkLoginError } = require("./login_page");

const { I } = inject();

module.exports = {

  button:{
    save: '~salvar',
  },
  checkLoginSucess() { 
    I.waitForElement('~salvar', 5);
    I.seeElement('~salvar');
  }
};