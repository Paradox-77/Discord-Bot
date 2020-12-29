module.exports = {
    name: 'ip',
    description: "This sends the IP adress of the ParadoxicSMP server!",
    execute(message, args) {
        message.channel.send(`:ping_pong: Pong! Welp I have a delay of ${Date.now() - message.createdTimestamp}ms`);
    }
}