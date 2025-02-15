const { Client, GatewayIntentBits } = require('discord.js');
const { registerCommands } = require('./commands');
const { onReady } = require('./events/ready');
const config = require('../config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    onReady(client);
});

registerCommands(client);

client.login(config.token);