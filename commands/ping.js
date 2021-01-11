module.exports = {
    name: 'ping',
    description: "This sends the IP adress of the ParadoxicSMP server!",
    execute(message, args, Discord) {
        let newEmbed = new Discord.MessageEmbed()
        .setColor('#8600ff')
        .setTitle('Pong!')
        .setDescription(`**🏓 Pong!**\n**Latency is ${Date.now() - message.createdTimestamp}ms**\n**API Latency is ${Date.now() - message.createdTimestamp}ms**`)
        message.channel.send(newEmbed);
    }
}