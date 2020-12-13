module.exports = {
    name: 'hi',
    description: "Says hi.",
    execute(message, args) {

        if (message.member.roles.cache.has('786805870846935090')) {
            message.reply('Hello master')
        } else {
            message.reply('Sup Dumbass');
        }
    }
}