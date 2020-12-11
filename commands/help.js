module.exports = {
    name: 'help',
    description: "Sends the list of commands for people who are not familiar with the bot!",
    execute(message, args){
        message.channel.send('Here are the list of all the commands :- \n**IP** - This sends the IP adress of the ParadoxicSMP server!\n**Website** - This sends the link to the Paradoxic Website!\n**Desc** - !<IGN> gives a short description about the player.');
    }
}