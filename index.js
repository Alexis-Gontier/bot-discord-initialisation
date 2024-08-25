import { Client, IntentsBitField } from 'discord.js';
import 'dotenv/config';

const client = new Client({
    intents: new IntentsBitField(53608447)
});

client.login(process.env.DISCORD_TOKEN);

client.once('ready', () => {
    console.log(`Connecté en tant que: ${client.user.tag}`);
});
