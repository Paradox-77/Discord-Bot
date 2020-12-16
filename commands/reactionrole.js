module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        if (message.member.roles.cache.has('773390283982372909')) {
            const channel = '775717463224090675';
const colorRoleRed = message.guild.roles.cache.find(role => role.name === "Red");
const colorRoleOrange = message.guild.roles.cache.find(role => role.name === "Orange");
const colorRoleYellow = message.guild.roles.cache.find(role => role.name === "Yellow");
const colorRoleGreen = message.guild.roles.cache.find(role => role.name === "Green");
const colorRoleBlue = message.guild.roles.cache.find(role => role.name === "Blue");
const colorRolePurple = message.guild.roles.cache.find(role => role.name === "Purple");
const colorRoleBrown = message.guild.roles.cache.find(role => role.name === "Brown");
const colorRoleInvisible = message.guild.roles.cache.find(role => role.name === "Invisible");
const colorRoleWhite = message.guild.roles.cache.find(role => role.name === "White");

const colorEmojiRed = '🔴';
const colorEmojiOrange = '🟠';
const colorEmojiYellow = '🟡';
const colorEmojiGreen = '🟢';
const colorEmojiBlue = '🔵';
const colorEmojiPurple = '🟣';
const colorEmojiBrown = '🟤';
const colorEmojiInvisible = '⚫';
const colorEmojiWhite = '⚪';

message.channel.send("Note: Reacting to many color roles will lead to it being messed up.\nThe Highest Role is Red and the Lowest it White.\nExample: if you react to Red, Blue and Purple only the Red Color Role will be visible")

let embed = new Discord.MessageEmbed()
    .setColor('#ffffff')
    .setTitle('Reaction Roles!')
    .addFields(
        { name: 'Color Role', value: `${colorEmojiRed} - <@&787645264046850119>\n${colorEmojiOrange} - <@&787645378714796032>\n${colorEmojiYellow} - <@&788337636976099339>\n${colorEmojiGreen} - <@&788337702164365313>\n${colorEmojiBlue} - <@&788337800952283186>\n${colorEmojiPurple} - <@&788337939829620736>\n${colorEmojiBrown} - <@&788338059146035230>\n${colorEmojiInvisible} - <@&788338142272421899>\n${colorEmojiWhite} - <@&788338266583203860>` }
    )

let messageEmbed = await message.channel.send(embed);
messageEmbed.react(colorEmojiRed);
messageEmbed.react(colorEmojiOrange);
messageEmbed.react(colorEmojiYellow);
messageEmbed.react(colorEmojiGreen);
messageEmbed.react(colorEmojiBlue);
messageEmbed.react(colorEmojiPurple);
messageEmbed.react(colorEmojiBrown);
messageEmbed.react(colorEmojiInvisible);
messageEmbed.react(colorEmojiWhite);

client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === colorEmojiRed) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(colorRoleRed);
        }
        if (reaction.emoji.name === colorEmojiOrange) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(colorRoleOrange);
        }
        if (reaction.emoji.name === colorEmojiYellow) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(colorRoleYellow)
        }
        if (reaction.emoji.name === colorEmojiGreen) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(colorRoleGreen)
        }
        if (reaction.emoji.name === colorEmojiBlue) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(colorRoleBlue)
        }
        if (reaction.emoji.name === colorEmojiPurple) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(colorRolePurple)
        }
        if (reaction.emoji.name === colorEmojiBrown) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(colorRoleBrown)
        }
        if (reaction.emoji.name === colorEmojiInvisible) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(colorRoleInvisible)
        }
        if (reaction.emoji.name === colorEmojiWhite) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(colorRoleWhite)
        }
    } else {
        return;
    }

});

client.on('messageReactionRemove', async (reaction, user) => {

    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;


    if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === colorEmojiRed) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(colorRoleRed);
        }
        if (reaction.emoji.name === colorEmojiOrange) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(colorRoleOrange);
        }
        if (reaction.emoji.name === colorEmojiYellow) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(colorRoleYellow)
        }
        if (reaction.emoji.name === colorEmojiGreen) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(colorRoleGreen)
        }
        if (reaction.emoji.name === colorEmojiBlue) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(colorRoleBlue)
        }
        if (reaction.emoji.name === colorEmojiPurple) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(colorRolePurple)
        }
        if (reaction.emoji.name === colorEmojiBrown) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(colorRoleBrown)
        }
        if (reaction.emoji.name === colorEmojiInvisible) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(colorRoleInvisible)
        }
        if (reaction.emoji.name === colorEmojiWhite) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(colorRoleWhite)
        }
    } else {
        return;
    }
});

        } else {
            message.reply('eat my ass dickhead')
        }
    }};   
