const { AoiClient } = require("aoi.js");

const bot = new AoiClient({
    token: process.env.token,
    prefix: "!",
    intents: ["Guilds", "GuildMessages", "MessageContent"],
    events: ["onMessage"]
});

// Komutları yükle
require("./handler/index.js")(bot);