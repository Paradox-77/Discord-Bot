module.exports = {
    name: 'website',
    description: "Sends the website link",
    execute(message, args) {
        message.channel.send('https://paradoxic.ml');
    }
}