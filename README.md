# webdriverIO
npm init
npm i cucumber
npm init wdio
npm install @wdio/cucumber-framework --save-dev

npx wdio run ./wdio.conf.js
npm i eslint --save-dev

# To run your test locally, you'll need a local selenium server running, you can install and launch a selenium standalone server with chrome, firefox and phantomjs drivers via the following commands in a separate terminal: 
 
npm install selenium-standalone@latest -g --save-dev
selenium-standalone install
selenium-standalone start


# From video
npm init
npm i cucumber
npm i protractor
npm i eslint --save-dev
npm i protractor-cucumber-framework

# Folders
test/config  >>> create protractor_config.js
test/features
test/step_definitions
test/utils

npx wdio run ./wdio.conf.js


npm i winston
npm i moment

Reports
-=ALLURE=-
1.npm install @wdio/allure-reporter --save-dev
2 update file wdio.conf.js
const allure = require('allure-commandline')

exports.config = {
    // ...
    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }
    // ...
}

3. allure open    (to view report)

-=DOT=-
npm install @wdio/dot-reporter --save-dev
update wdio.conf.js
module.exports = {
  // ...
  reporters: ['dot', 'concise'],
  // ...
};

-=CONSICE=-
npm install @wdio/concise-reporter --save-dev
update wdio.conf.js
module.exports = {
  // ...
  reporters: ['dot', 'concise'],
  // ...
};




npm i yargs
npm i cucumber-pretty
