const _ = require('lodash');
const Slackbot = require('slackbots');
const token = require('../private/token.js');
// const api = require('../libs/apis');

class TMDI {
  constructor() {
    this.name = "TMDI";
    this.token = token;
    this.app_icon = { icon_emoji: ":robot_face:" };
    this.init();
  }
  init() {
    this.slackbot = this.initSlackBot();
    this.initEvents();
  }
  initSlackBot() {
    return new Slackbot({
      name: this.name,
      token: this.token
    });
  }
  initEvents() {
    this.start();
    this.message();
    // this.error();
  }
  message() {
    const bot = this.slackbot;
    const params = this.app_icon;
    this.on('message', data => {
      if (data.type !== 'message') { return; }
      let show = data.text.match(/weather/gi);
      if (data.text === 'weather') {
        console.log(show);
        bot.postMessageToChannel("general", "Well hello right back!", params);
      }
    })
  }
  on(str, cb) {
    this.slackbot.on(str, cb);
  }
  start() {
    const bot = this.slackbot;
    const params = this.app_icon;
    this.on('start', () => {
      bot.postMessageToChannel('general', 'Get ready for TMDI', params);
    })
  }
  error() {
    this.on('error', err => { console.log(err) })
  }
}

module.exports = new TMDI();