
var tg = window.Telegram.WebApp



addEventListener("load", (event) => {
    document.getElementById('adb').append(window.innerHeight + "x" + window.innerWidth);
    tg.ready();
});

function down() {
    tg.close();
}