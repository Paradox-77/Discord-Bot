module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        if (message.member.roles.cache.has('773390283982372909')) {
            const channel = '775717463224090675';
const testOneRole = message.guild.roles.cache.find(role => role.name === "TestOne");
const testTwoRole = message.guild.roles.cache.find(role => role.name === "TestTwo");

const testOneEmoji = '🟦';
const testTwoEmoji = '🟧';

let embed = new Discord.MessageEmbed()
    .setColor('#8600ff')
    .setTitle('Reaction Roles!')
    .addFields(
        { name: 'Cyan', value: `${testOneEmoji} Gives you the test one role.` }
        , { name: 'Orange', value: `${testTwoEmoji} Gives you the test two role.` }
    )

let messageEmbed = await message.channel.send(embed);
messageEmbed.react(testOneEmoji);
messageEmbed.react(testTwoEmoji);

client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === testOneEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(testOneRole);
        }
        if (reaction.emoji.name === testTwoEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(testTwoRole);
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
        if (reaction.emoji.name === testOneEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(testOneRole);
        }
        if (reaction.emoji.name === testTwoEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(testTwoRole);
        }
    } else {
        return;
    }
});

        } else {
            message.reply('eat my ass dickhead')
        }
    }};   
