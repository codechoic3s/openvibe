const { Bot } = require('grammy')

const bot = new Bot('5823745441:AAHgLomjQ-iHPs85VS_Utl2OIp2zImB5s2U');

bot.on("message:text", (ctx) => {
    ctx.reply("Echo: " + ctx.message.text)
});

bot.start();
