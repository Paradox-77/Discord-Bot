module.exports = {
    name: 'embed',
    description: "Makes Embeds.",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#8600ff')
        .setTitle('Test')
        .setURL('https://paradoxic.ml')
        .setAuthor('Paradox_77')
        .setDescription('This is a test')
        .setThumbnail('https://paradoxic.ml/logoParadox.png')
        .addFields(
            { name: 'Test ID 1', value: 'Test ID 2'}



        )
        .setImage('https://paradoxic.ml/logoParadox.png')
        .setTimestamp()
        .setFooter('Test ID 3', 'https://paradoxic.ml/logoParadox.png');

        message.channel.send(newEmbed);
    }
}