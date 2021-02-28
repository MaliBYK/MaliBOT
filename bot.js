require("dotenv").config();

const chalk = require("chalk");
const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "GUILD_MEMBER"],
});

const BOT_PREFIX = "ma!";
const MALI_KING_COMMAND = "mali kraldır";
const I_AM_BOY_COMMAND = "bay";
const I_AM_GIRL_COMMAND = "bayan";
const SHOW_AVATAR_COMMAND = "avatar";

client.on("ready", () => {
  console.log("Bot logged In");
});

//?CONDITIONS
client.on("message", msg => {
  msg.content = msg.content.toLowerCase();

  if (msg.content === `${BOT_PREFIX}${MALI_KING_COMMAND}`) reactWithCrown(msg);
  else if (msg.content === `${BOT_PREFIX}${I_AM_BOY_COMMAND}`) IAmBoy(msg);
  else if (msg.content === `${BOT_PREFIX}${I_AM_GIRL_COMMAND}`) IAmGirl(msg);
  else if (msg.content === `${BOT_PREFIX}${SHOW_AVATAR_COMMAND}`)
    ShowAvatar(msg);
});

//!FUNCTIONS START
function reactWithCrown(msg) {
  msg.react("👑");
}

function IAmBoy(msg) {
  msg.member.roles.add("797567992007360522");
  msg.reply("'Baylar' Rolü Başarıyla Eklendi!");
}

function IAmGirl(msg) {
  msg.member.roles.add("797567729879482440");
  msg.reply("'Bayanlar' Rolü Başarıyla Eklendi!");
}

function ShowAvatar(msg) {
  msg.channel.send(msg.author.displayAvatarURL());
}
//!FUNCTIONS END

//*START THE BOT
client.login(process.env.BOT_TOKEN);
