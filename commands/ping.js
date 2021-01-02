module.exports = {
    name: 'ping',
    description: "This sends the ping of the Sentinel bot!",
    execute(message, args) {
        message.channel.send(`:ping_pong: Pong! Welp I have a delay of ${Date.now() - message.createdTimestamp}ms`);
    }
}
