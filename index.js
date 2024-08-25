const { Client, IntentsBitField } = require('discord.js');
const client = new Client({intents: new IntentsBitField(53608447)});
require('dotenv').config();


client.login(process.env.DISCORD_TOKEN);

client.once('ready', () => {
    console.log(`Connecté en tant que: ${client.user.tag}`);
});
