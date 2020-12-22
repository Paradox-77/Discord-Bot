module.exports = {
    name: 'terminate',
    description: "Force kills the bot. Only to be used in emergency. Might cause the bot to corrupt",
    execute(message, args) {
        message.channel.send('Terminating and killing all modules in 5 seconds.');
    }
}