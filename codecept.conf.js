exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      // app: 'C:/Users/qualidade2/.android/app-release.apk',
      app: 'C:/Users/qualidade2/.android/automacao/apks/afv.apk',
      desiredCapabilities: {
        appPackage: "br.com.flexmobile.afv",
        appActivity: "br.com.flextotal.afvandroid.main.LoginActivity",
        deviceName: 'pixel2',
        platformVersion: '9'
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js'
  },
  mocha: {},
  bootstrap: './server/server.js',
  teardown: './server/server.js',
  hooks: [],
  // gherkin: {
  //   features: './features/*.feature',
  //   steps: ['./step_definitions/steps.js']
  // },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  },
  name: 'automa--oCurso',
  tests: './steps/*_test.js'
}