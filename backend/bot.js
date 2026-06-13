const { Telegraf } = require("telegraf");
let bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply("Welcome! I am your product bot."));

bot.launch();
console.log("Bot is running...");

bot.command("about", (ctx) => {
  ctx.reply(
    "I'm a bot that provides information about products. You can ask me about different products and categories!",
  );
});

module.exports = bot;
