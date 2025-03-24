Feature('login');
const {I, login_page, home_page} = inject() //importação de módulos


BeforeSuite(() => { //execução antes dos testes
   console.log('Before Suite')
});

Before(() => {
   console.log('Before')
});

AfterSuite(() => {  //execução depois dos testes
   console.log('After Suite')
});

After(() => {
   console.log('After')
});

Scenario('Login with sucess',  (home_page) => { //login com sucesso

   login_page.doLogin('teste@teste.com', '123456')
    
   I.tap('~entrar')
   home_page.checkLoginSucess()
  
});

Scenario('Login with error',  () => { //login com erro
   login_page.doLogin('xteste@teste.com', '123456')

   I.tap('~entrar')
   login_page.ckeckLoginError()
   
});