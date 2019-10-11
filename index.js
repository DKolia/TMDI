const Slackbot = require("slackbots");
const axios = require("axios");
const ourToken = require("./private/token.js");

// This instantiates the Bot
const bot = new Slackbot({
  token: ourToken,
  name: "TMDI Bot"
});

// This globally sets Params and the Bot's Icon
const params = {
  icon_emoji: ":robot_face:"
};

// This is the Start Handler
bot.on("start", () => {
  bot.postMessageToChannel("general", "Get ready for TMDI!", params);
});

// This is the Error Handler
bot.on("error", err => console.log(err));

// This is the Message Handler
bot.on("message", data => {
  if (data.type !== "message") {
    return;
  }
  handleMessage(data.text);
});

// Respons to Data
function handleMessage(message) {
  if (message === "hello") {
    bot.postMessageToChannel("general", "Well hello right back!", params);
  } else if (message === "goodbye") {
    bot.postMessageToChannel("general", "Byeeeee <3", params);
  } else if (message === "lorem") {
    getLorem();
  }
}

// Get Lorem Ipsum
function getLorem() {
  axios.get("http://loripsum.net/api/1/short/plaintext").then(res => {
    const lorem = res.data;

    bot.postMessageToChannel(
      "general",
      `Here is your Lorem Ipsum: ${lorem}`,
      params
    );
  });
}

console.log("Reaching Line 64");
