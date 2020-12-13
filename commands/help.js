module.exports = {
    name: 'help',
    description: "Shows Help embed.",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#8600ff')
            .setTitle('Help')
            .setURL('https://paradoxic.ml')
            .setDescription('List of commands:')
            .addFields(
                { name: '!Help', value: 'Shows this embed with descriptions of commands.' }
                , { name: '!IP', value: 'Tells you the IP of the ParadoxicSMP MC server.' }
                , { name: '!Website', value: "Gives you the link to the Paradoxic Website.\nHint: You can click the 'Help' to go to the website too." }
                , { name: '!Desc', value: 'Tells you how to get a description of each player on the server.' }
            )
            .setFooter('Help', 'https://paradoxic.ml/logoParadox.png');

        message.channel.send(newEmbed);
    }
}