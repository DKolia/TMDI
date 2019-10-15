/**
 * @name TMDI
 * @author David Kolia & Isaiah Davis
 * @description A slack bot that gives you too much damn information
 */
// User setup; request credentials; store locally
const tmdiBot = require('./libs/tmdi.js');

(async function () {
  tmdiBot.run();
})();
