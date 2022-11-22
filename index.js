const { Bot } = require('grammy')

const webAppUrl = 'https://openvibe.codechoic3s.ml/';

const bot = new Bot('5823745441:AAHgLomjQ-iHPs85VS_Utl2OIp2zImB5s2U');

bot.api.setMyCommands([
    { command: "start", description: "Start the bot" },
  ]);

bot.command("start", (ctx) => {
    bot.api.sendMessage(ctx.chat.id, 'OpenVibe Bot', {
        reply_markup: {
            inline_keyboard: [
                [{text: "Open app", web_app: {url: webAppUrl}}],
            ]
        }
    })
});

bot.start();
