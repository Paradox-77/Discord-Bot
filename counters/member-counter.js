const { Guild } = require("discord.js")

module.exports = async (client) =>{
    const guild = client.guilds.cache.get('773389396254654474');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('787916619736416256');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        //console.log('Updating Member Count');
    }, 5000);
}
