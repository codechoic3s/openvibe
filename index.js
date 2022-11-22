const { Bot } = require('grammy')

const webAppUrl = 'https://openvibe.codechoic3s.ml/';

const bot = new Bot('5823745441:AAHgLomjQ-iHPs85VS_Utl2OIp2zImB5s2U');

bot.command("start", (ctx) => {
    bot.api.sendMessage(ctx.chat.id, 'OpenVibe Bot', {
        reply_markup: {
            inline_keyboard: [
                [{text: "Open app", web_app: {url: webAppUrl}}],
            ]
        }
    })
});

bot.command("mail", (ctx) => {
    bot.api.sendMessage(ctx.chat.id, 'button', {
        reply_markup: {
            inline_keyboard: [
                [{text: "Open app", web_app: {url: 'https://box.codechoic3s.ml/'}}],
            ]
        }
    })
})

bot.start();
