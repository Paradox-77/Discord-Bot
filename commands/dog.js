module.exports = {
    name: 'dog',
    description: "Tells GS_StarGamer to shut the fuck up.",
    execute(message, args){

        if(message.member.roles.cache.has('786805870846935090')){
            message.reply('Im sorry master i do not poses such powers.')
        } else {
            message.reply('lol dogs.... stfu');
        }
    }
}