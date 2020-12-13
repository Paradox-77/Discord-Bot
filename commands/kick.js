module.exports = {
    name: 'kick',
    description: "Kicks Players",
    execute(message, args) {

        if (message.member.roles.cache.has('786805870846935090')) {

            const member = message.mentions.users.first();
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send("User has been kicked.")
            } else {
                message.reply('Sorry master, I was unable to kick that member');
            }

        } else {
            message.channel.send('Stfu you aint a mod.')
        }


    }
}
