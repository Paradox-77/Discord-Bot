module.exports = {
    name: 'ip',
    description: "This sends the IP adress of the ParadoxicSMP server!",
    execute(message, args) {
        if (!args[0]) return message.channel.send('Please specify what you want to know about.')
    } 
}