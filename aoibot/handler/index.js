module.exports = (bot) => {
    bot.loadCommands("./commands/", true);
    
    bot.readyCommand({
        channel: "",
        code: `$log[Bot Aktif!]`
    });
}