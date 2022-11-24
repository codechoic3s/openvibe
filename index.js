const { Bot } = require('grammy')

const webAppUrl = 'https://openvibe.codechoic3s.ml/';

const bot = new Bot('5823745441:AAHgLomjQ-iHPs85VS_Utl2OIp2zImB5s2U');

bot.api.setMyCommands([
    { command: "start", description: "Start the bot" },
    { command: "test", description: "View pre design" },
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

bot.command("test", (ctx) => {
    bot.api.sendMessage(ctx.chat.id, 'OpenVibe Bot', {
        reply_markup: {
            inline_keyboard: [
                [{text: "Open app", web_app: {url: 'https://www.figma.com/proto/PBA6BJkyQ99bEwUvufLvKK/Untitled?page-id=0%3A1&node-id=18%3A3&viewport=-2877%2C-2958%2C1.98&scaling=contain&hotspot-hints=0&hide-ui=1'}}],
            ]
        }
    })
});

bot.start();
