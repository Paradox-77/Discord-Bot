module.exports = {
    name: 'blindembed',
    description: "Sends the Blind message Embed",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#8600ff')
            .setTitle('You have been **BLINDED**')
            .setDescription('You have been blinded by a Mod in the server.\nThis makes it so that you wont be able to see any channels or messages untill you are unblinded.\n**Reasons:**')
            .addFields(
                { name: 'Privacy', value: `You might have been blinded so that you wouldn't see the messages being sent.` }
                , { name: 'Fanaticism', value: `You might have been disrespective towards the moderators or the owner.\nThis **might** not be the case.` }
                , { name: 'Toxicity', value: `You might be blinded as you were toxic and the others wanted to talk behind or back.\nThis **might** not be the case.` }
                , { name: 'Other', value: 'You might have been blinded for reasons not stated here.\nIf so please wait out your Blind Period and **request** for the reason of your Blinding.\nMods can refuse to tell you the reason too.' }
            )
            .setFooter('Please do not DM a Mod or the Owner as they are not going to unblind you on your request', 'https://paradoxic.ml/logoParadox.png');
        if(message.member.roles.cache.has('773390283982372909')){
            message.channel.send(newEmbed)
            message.delete({ timeout: 1000 })
            } else {
                return
        } 


    }
}
