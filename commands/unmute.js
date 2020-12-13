const { MessageManager } = require("discord.js");

module.exports = {
    name: 'unmute',
    description: "Unmutes Players",
    execute(message, args) {

        if (message.member.roles.cache.has('786805870846935090')) {

            const muteTarget = message.mentions.users.first();
            if (muteTarget) {
                let mainRole = message.guild.roles.cache.find(r => r.name === 'Member')
                let muteRole = message.guild.roles.cache.find(r => r.name === 'Muted')

                let memberTarget = message.guild.members.cache.get(muteTarget.id);

                memberTarget.roles.add(mainRole.id);
                memberTarget.roles.remove(muteRole.id);
                message.reply(`has unmuted <@${memberTarget.user.id}>.`);
            } else {
                message.reply("Sorry master, I was unable to unmute that member");
            }

        } else {
            message.reply('lol, i dont listen to you')
        }


    }
}