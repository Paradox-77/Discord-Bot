const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!'

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
};

client.once('ready', () => {
    console.log('Paradoxic Control is initialized and online.');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

    if(command === 'ip'){
        client.commands.get('ip').execute(message, args);
    } else if(command == 'website'){
        client.commands.get('website').execute(message, args);
    } else if(command == 'help'){
        client.commands.get('help').execute(message, args);
    }
});

client.login('NzQyMjA4ODQ2MDI1NDU3NzE0.XzCx2g.qKMhbexnOO8u1G1dlv-816bjkKM');
