const { checkLoginError, fields } = require("./login_page");

const { I } = inject();

module.exports = {

  button:{
    save: '~salvar', //botão com identificador para salvar
  },

  fields:{
    code: {android: '~codigo'},//'//android.widget.EditText[@content-desc="codigo"]',
    name: {android: '~aluno'},//'//android.widget.EditText[@content-desc="aluno"]',
    search: {android: '~search'}//'//android.widget.EditText[@content-desc="search"]'
  },

 
  registerStudent(code, name){
    I.fillField(this.fields.code,code)
    I.fillField(this.fields.name,name)
    I.tap(this.button.save)

  },
  searchStudent(search,check){
    I.fillField(this.fields.search, search)

    I.runOnAndroid(() => {
    I.seeElement('//android.view.ViewGroup[@content-desc="' + check + '"]/android.widget.TextView')
  })
},

  //  fillSearch(search){
  // I.fillField(this.fields.search,search)
  // },


  checkLoginSucess() { //função
    I.waitForElement(this.button.save,5);
    I.seeElement(this.button.save);
   // I.waitForElement('~salvar', 5); // parar por 5 segundos
   // I.seeElement('~salvar');
  }
}