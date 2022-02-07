const {
  AfterStep
} = require('@cucumber/cucumber');
const {
  default: CucumberJsJsonReporter
} = require('wdio-cucumberjs-json-reporter');

BeforeStep({
  tags: "@foo"
}, function () {
  // This hook will be executed before all steps in a scenario with tag @foo
});

AfterStep(function (testCase) {
  // This hook will be executed after all steps, and take a screenshot on step failure
  if (testCase.result.status === Status.FAILED) {
    CucumberJsJsonReporter.attach(browser.saveScreenshot('./snapshot.png'));
  }
});