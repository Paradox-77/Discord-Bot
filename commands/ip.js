module.exports = {
    name: 'ip',
    description: "This sends the IP adress of the ParadoxicSMP server!",
    execute(message, args){
        message.channel.send('ParadoxSMP : paradoxicsmp.aternos.me');
    }
}