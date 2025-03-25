// Feature('login')//.tag('@login');
// const {I, login_page, home_page} = inject() //importação de módulos


// BeforeSuite(() => { //execução antes dos testes
//    console.log('Before Suite')
// });

// Before(() => {
//    console.log('Before')
// });

// AfterSuite(() => {  //execução depois dos testes
//    console.log('After Suite')
// });

// After(() => {
//    console.log('After')
// });

// Scenario('Login with sucess',  (home_page) => { //login com sucesso

//    I.runOnAndroid(() => {
//       console.log('Estou no Android')
// }),

//    login_page.doLogin('teste@teste.com', '123456')
//    I.tap('~entrar')
//    home_page.checkLoginSucess()

//    // pause()
//    // I.touchPerform([
//    //    {
//    //    action: 'longPress',
//    //    options: {x:300, y: 1100}
//    //    },
//    //    {
//    //       action: 'MoveTo',
//    //       options: {x:300, y: 250}
//    //       },
//    //       {action: 'realease'}
//    // ])
//    //I.wait(5)
  
// });//.tag('@login_sucesso');

// Scenario('Login with error',  () => { //login com erro
//    login_page.doLogin('xteste@teste.com', '123456')

//    I.tap('~entrar') //botão entrar
//    login_page.ckeckLoginError()
   
// })//.tag('@login_erro');