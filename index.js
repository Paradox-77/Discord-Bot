const Discord = require("discord.js");
const dotenv = require("dotenv")
require("dotenv").config()
dotenv.config()

const client = new Discord.Client();
client.login(process.env.bottoken)

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
    } else if(command == 'desc'){
        client.commands.get('desc').execute(message, args);
    } else if(command == 'paradox_77'){
        client.commands.get('paradox_77').execute(message, args);
    } else if(command == 'pigshot'){
        client.commands.get('pigshot').execute(message, args);
    } else if(command == 'xyz_reet'){
        client.commands.get('xyz_reet').execute(message, args);
    } else if(command == 'dremistakem'){
        client.commands.get('dremistakem').execute(message, args);
    } else if(command == 'purge'){
        client.commands.get('purge').execute(message, args);
    } else if(command == 'embed'){
        client.commands.get('embed').execute(message, args, Discord)
    } else if(command == 'dog'){
        client.commands.get('dog').execute(message, args)
    } else if(command == 'hi'){
        client.commands.get('hi').execute(message, args)
    } else if(command == 'kick'){
        client.commands.get('kick').execute(message, args)
    } else if(command == 'ban'){
        client.commands.get('ban').execute(message, args)
    } 
});

const server = require("express")()
server.all("/", (req, res) => res.send("kept alive"))
server.listen(3000, () => console.log("server running"))