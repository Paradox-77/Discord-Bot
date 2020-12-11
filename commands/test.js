module.exports = {
    name: 'test',
    description: "TEST",
    execute(message, args){

        let role = message.guild.roles.cache.find(r => r.name === "Moderator")

        if(message.member.roles.cache.some(r => r.name === "Moderator")){
            message.channel.send('Yep i did that');

        } else {
            message.channel.send("You ain't a mod genius.");
        }

    }
}