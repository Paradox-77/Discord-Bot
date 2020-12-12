module.exports = {
    name: 'purge',
    description: "Deletes Messages",
    async execute(message, args){

        if(message.member.roles.cache.has('786805870846935090')){
            if(!args[0]) return message.reply("Yo genius enter a number.");
            if(isNaN(args[0])) return message.reply("lol enter a real number, you piece of shit.");

            if(args[0] > 100) return message.reply("Bruh, i cant delete more than 100 messages at a time.");
            if(args[0] < 1) return message.reply("Fatass enter a positive number.");

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages)
            })
            } else {
            message.channel.send('Stfu you aint a mod.')
        }


    }
}
