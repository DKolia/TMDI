const _ = require('lodash');
const Slackbot = require('slackbots');
const token = require('../private/token.js');
// const api = require('../libs/apis');

class TMDI {
  constructor() {
    this.name = "TMDI";
    this.token = token;
    this.app_icon = { icon_emoji: ":robot_face:" };
  }
  init() {
    this.slackbot = this.initSlackBot();
    this.initEvents();
  }
  initSlackBot() {
    return new Slackbot({
      token: this.token,
      name: this.name
    });
  }
  initEvents() {
    this.start();
    this.message(); // pass arguements 
    this.error();
  }
  message() {
    const bot = this.slackbot;
    const params = this.app_icon;
    this.on('message', data => {
      console.log(data);
      if (data.type !== 'message') { return; }

      if (message === "hello") {
        bot.postMessageToChannel("general", "Well hello right back!", params);
      } else if (message === "goodbye") {
        bot.postMessageToChannel("general", "Byeeeee <3", params);
      } else if (message === "lorem") {
        getLoremFunction.getLorem();
      }
    })
  }
  run() {
    this.init();
  }
  on(str, cb) {
    return this.slackbot.on(str, cb);
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