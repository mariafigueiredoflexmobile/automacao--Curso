const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
// setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'automa--oCurso',
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'C:/Users/qualidade2/.android/app-release.apk',
      desiredCapabilities: {
        appPackege: "com.qazandoapp",
        appActivity: "MainActivity",
        deviceName: 'pixel',
        platformVersion: '7' 
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  }, 
  
}


