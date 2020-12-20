const { MessageReaction } = require("discord.js");

module.exports = {
    name: "poll",
    description: "Simple and dynamic poll command",
    async execute(message, args, Discord, client) {

        if (!args[0]) return message.reply("Please enter a messsage.");
        let messageArgs = args.slice(0).join(" ");

        let embed = new Discord.MessageEmbed()
            .setColor("#8400ff")
            .setTitle("Poll!")
            .setDescription(`${messageArgs}`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react("👍");
        messageEmbed.react("👎");
        message.delete({ timeout: 1000 })
    },
};
