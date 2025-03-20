Feature('login');
const {I, login_page, home_page} = inject()

Scenario('Login with sucess',  (home_page) => {

   login_page.doLogin('teste@teste.com', '123456')
    
   I.tap('~entrar')
   home_page.checkLoginSucess()
  
});

Scenario('Login with error',  () => {
   login_page.doLogin('xteste@teste.com', '123456')

   I.tap('~entrar')
   login_page.ckeckLoginError()
   
});