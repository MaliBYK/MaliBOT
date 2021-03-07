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
        msg.channel.send("Uyuya Kaldın Herhalde... Saat : ", date.getHours());
    }
}

module.exports = { GmFunc };