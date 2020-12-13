module.exports = {
    name: 'ban',
    description: "Bans Players",
    execute(message, args){

        if(message.member.roles.cache.has('773390283982372909')){

                const member = message.mentions.users.first();
                if(member){
                    const memberTarget = message.guild.members.cache.get(member.id);
                    memberTarget.ban();
                    message.channel.send("User has been banned.")
                } else {
                    message.reply('Sorry master, I was unable to ban that member');
                }
            
            } else {
            message.channel.send('Only my dad can do that.')
        } 


    }
}
