import {
  OIL_LAYER,
  OIL_YES_BUTTON
} from '../test_constants.js';

const REDIRECT_TIMEOUT = 5000;
const ASSERT_TIMEOUT = 2000;

module.exports = {
  '@disabled': false,
  beforeEach: browser => {
    browser
      .deleteCookies();
  },

  'OIL Layer Power Opt-In is working across two domains': function (browser) {
    browser
      .url(browser.globals.launch_url_host1 + 'demos/complete-integration-site-a.html')
      .useXpath()
      .waitForElementPresent(OIL_LAYER, ASSERT_TIMEOUT, false)
      .click(OIL_YES_BUTTON);
    browser.url((result) => {
      if (result.toString().indexOf('fallback') !== -1) {
        browser
          .pause(200)
          .waitForElementNotPresent(OIL_LAYER, ASSERT_TIMEOUT);
      } else {
        browser.pause(ASSERT_TIMEOUT);
      }
    });
    browser
      .pause(REDIRECT_TIMEOUT)
      .url(browser.globals.launch_url_host2 + 'demos/complete-integration-site-b.html')
      .useXpath()
      .waitForElementNotPresent(OIL_LAYER, 1000)
      .end();
  }
};
