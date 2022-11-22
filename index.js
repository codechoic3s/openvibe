const { Bot } = require('grammy')

const webAppUrlad = 'https://box.codechoic3s.ml/admin/';
const webAppUrl = 'https://box.codechoic3s.ml/mail/';

const bot = new Bot('5823745441:AAHgLomjQ-iHPs85VS_Utl2OIp2zImB5s2U');

bot.on("message:text", (ctx) => {
    if(ctx.message.text == "/start") {
        bot.api.sendMessage(ctx.chat.id, 'button', {
            reply_markup: {
                inline_keyboard: [
                    [{text: "Mail", web_app: {url: webAppUrl}}],
                    [{text: "Admin", web_app: {url: webAppUrlad}}]
                ]
            }
        })
    }
});

bot.start();
