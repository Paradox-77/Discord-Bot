const Discord = require('discord.js');

const client = new Discord.Client();



client.once('ready', () => {
    console.log('Discord-Bot is initialized and online.');
});



client.login('bot.Token');
