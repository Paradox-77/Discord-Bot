const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-'

client.once('ready', () => {
    console.log('Discord-Bot is initialized and online.');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    }
});

client.login('NzQyMjA4ODQ2MDI1NDU3NzE0.XzCx2g.qKMhbexnOO8u1G1dlv-816bjkKM');
