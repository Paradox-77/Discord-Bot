module.exports = {
    name: 'desc',
    description: "Gives description about a player on the server.",
    execute(message, args) {
        message.channel.send('Do !<IGN> to get a description about that player');
    }
} 