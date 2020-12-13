module.exports = {
    name: 'embed',
    description: "Makes Embeds.",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#8600ff')
        .setTitle('Test')
        .setURL('https://paradoxic.ml')
        .setDescription('This is a test')
        .addFields(
            { name: 'Test ID 1', value: 'Test ID 2'}
        )
        .setFooter('Help', 'https://paradoxic.ml/logoParadox.png');

        message.channel.send(newEmbed);
    }
}