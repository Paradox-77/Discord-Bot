module.exports = {
    name: 'timings',
    description: "Shows when the server will be online.",
    execute(message, args, Discord) {
        let newEmbed = new Discord.MessageEmbed()
        .setColor('#8600ff')
        .setTitle('Timings')
        .setDescription('**First Session** - 2 PM to indefinite\n---------------------------------------------\n**Second Session** - 8:30 PM to 10:30 PM')
        .setFooter('These Timings may vary hugely from day to day, Do not expect the server to be online at these timings all the time', 'https://paradoxic.ml/logoParadox.png')
        message.channel.send(newEmbed);
    }
} 