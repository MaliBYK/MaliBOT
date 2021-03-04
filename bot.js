require("dotenv").config();

const Distube = require("distube");
const chalk = require("chalk");
const Discord = require("discord.js");
const client = new Discord.Client({
  // partials: ["MESSAGE", "GUILD_MEMBER"],
  // restTimeOffset:0,
  // presence: {
  //   status: "dnd",
  //   activity.name: {
  //     name:"MaliBOT",
  //     activity: "PLAYING mb!help"
  //   }
  // }
});

const distube = new Distube(client, {});

const BOT_PREFIX = process.env.BOT_PREFIX;
const MALI_KING_COMMAND = "mali king";
const I_AM_BOY_COMMAND = "boy";
const I_AM_GIRL_COMMAND = "girl";
const SHOW_AVATAR_COMMAND = "avatar";
const HELP_COMMAND = "help";
const FUN_HELP_COMMAND = `${HELP_COMMAND} fun`;
const MODERATOR_HELP_COMMAND = `${HELP_COMMAND} moderator`;
const MEMBER_HELP_COMMAND = `${HELP_COMMAND} member`;
const SERVER_INFO_COMMAND = "members";
const SA_COMMAND = "sa";
const AS_COMMAND = "allaha şükür";
const AS2_COMMAND = "as";
const GM_COMMAND = "günaydın";
const PING_COMMAND = "ping";
const GN_COMMAND = "iyi geceler";
client.on("ready", () => {
  console.log("Bot logged In");
});

//?CONDITIONS
client.on("message", msg => {
  msg.content = msg.content.toLowerCase();

  if (msg.author.bot) return;
  else if (!msg.guild) return;

  if (msg.content.startsWith(`${MALI_KING_COMMAND}`)) reactWithCrown(msg);
  else if (msg.content === `${BOT_PREFIX}${I_AM_BOY_COMMAND}`) IAmBoy(msg);
  else if (msg.content === `${BOT_PREFIX}${I_AM_GIRL_COMMAND}`) IAmGirl(msg);
  else if (msg.content === `${BOT_PREFIX}${SHOW_AVATAR_COMMAND}`)
    ShowAvatar(msg);
  else if (msg.content === `${BOT_PREFIX}${SERVER_INFO_COMMAND}`)
    NumberOfPeople(msg);
  else if (msg.content === `${SA_COMMAND}`) AsFunc(msg);
  else if (msg.content === `${AS_COMMAND}`) AsReactFunc(msg);
  else if (msg.content === `${AS2_COMMAND}`) AsReactFunc(msg);
  else if (msg.content === `${GN_COMMAND}`) GnFunc(msg);
  else if (msg.content.startsWith(`${GM_COMMAND}`)) GmFunc(msg);
  else if (msg.content.startsWith(`${BOT_PREFIX}${HELP_COMMAND}`)) Help(msg);
  else if (msg.content.startsWith(`${BOT_PREFIX}${PING_COMMAND}`)) Ping(msg);
});

//!FUNCTIONS START
function reactWithCrown(msg) {
  msg.react("👑");
}

function IAmBoy(msg) {
  msg.member.roles.add("797567992007360522");
  msg.reply("Role 'Baylar' Succesfully Added!");
}

function IAmGirl(msg) {
  msg.member.roles.add("797567729879482440");
  msg.reply("Role 'Bayanlar' Succesfully Added!");
}

function ShowAvatar(msg) {
  msg.channel.send(msg.author.displayAvatarURL());
}

function Help(msg) {
  const webSite = "https://www.google.com";
  if (msg.content === "") {
  }
  const helpEmbed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("HELP MENU")
    .setURL(webSite)
    // .setAuthor("MaliBOT", "https://i.imgur.com/9Pc3CWS.png", webSite)
    .addFields(
      {
        name: "Fun Commands Help ",
        value: `${BOT_PREFIX}${FUN_HELP_COMMAND}`,
      },
      {
        name: "Moderator Commands Help",
        value: `${BOT_PREFIX}${MODERATOR_HELP_COMMAND}`,
      },
      {
        name: "Member Commands Help",
        value: `${BOT_PREFIX}${MEMBER_HELP_COMMAND}`,
      }
    )
    .setThumbnail("https://i.imgur.com/9Pc3CWS.png")
    .setTimestamp()
    .setFooter("Developed by Mali#2193", "https://i.imgur.com/9Pc3CWS.png");

  msg.channel.send(helpEmbed);
}
function AsFunc(msg) {
  msg.react("🅰️");
  msg.react("🇸");
  msg.channel.send(`Aleykümselam ${msg.member} Hoş geldin.`);
}
function GmFunc(msg) {
  const daysMessages = [
    "Kimsenin Seni Üzmeye Cesaret Edemediği,Neşe Dolu Bir Pazar Olsun!..",
    "Tarihteki en kısa korku hikayesi, bugünün Pazartesi sabahı olması. Günaydın dostum, okula yine geç kalma.",
    "Güzel Bir Salı Sabahından Selamlar Sevgiler. Hayırlı Sabahlar!",
    "Huzur Dolu Güzel Bir Çarşamba Günü Olsun İnşallah. GÜNAYDINN!",
    "Hoş geldin perşembe. Hayırlı Sabahlar.",
    "Sabahınız Hayır Gününüz Aydın , Cumanız Mübarek Olsun. Günaydın!",
    "Tatilden Selamlar! Günaydın!",
  ];
  const date = new Date();
  if (date.getHours() < 12) {
    msg.react("🌞");
    msg.react("😇");
    msg.channel.send(daysMessages[date.getDay()]);
  } else {
    msg.react("😴");
    msg.channel.send("Uyuya Kaldın Herhalde...");
  }
}
function AsReactFunc(msg) {
  msg.react("🤲");
}
function Ping(msg) {
  msg.reply(`Your Ping : ${client.ws.ping}ms`);
}
function GnFunc(msg) {
  if (new Date().getHours() > 17) {
    msg.react("🦉");
    msg.react("🌃");
    msg.channel.send(
      "Bir geceyi değil, bütün geceleri sana armağan ediyorum. İyi geceler."
    );
  } else {
    msg.react("🌃");
    msg.channel.send("Gece Daha Başladı...");
  }
}

//!FUNCTIONS END

//*START THE BOT
client.login(process.env.BOT_TOKEN);
