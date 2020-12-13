const { MessageManager } = require("discord.js");
const ms = require('ms');

module.exports = {
    name: 'mute',
    description: "Mutes Players",
    execute(message, args) {

        if (message.member.roles.cache.has('786805870846935090')) {

            const muteTarget = message.mentions.users.first();
            if (muteTarget) {
                let mainRole = message.guild.roles.cache.find(r => r.name === 'Member')
                let muteRole = message.guild.roles.cache.find(r => r.name === 'Muted')

                let memberTarget = message.guild.members.cache.get(muteTarget.id);

                if(!args[1]){
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.reply(`has muted <@${memberTarget.user.id}> indefinitely.`);
                    return
                }

                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.reply(`has muted <@${memberTarget.user.id}> for ${ms(ms(args[1]))}.`);

                setTimeout(function(){
                    memberTarget.roles.add(mainRole.id);
                    memberTarget.roles.remove(muteRole.id);
                }, ms(args[1]));
            } else {
                message.reply("Sorry master, I was unable to mute that member");
            }

        } else {
            message.reply('lol, i dont listen to you')
        }


    }
}
