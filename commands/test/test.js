//Here is an example of an embed message with all its features!
const { Client, Message, MessageEmbed } = require('discord.js'); //define embed

module.exports = {
    name: 'embed',
    run: async (client, message, args, Discord) => {
        const embed = new Discord.MessageEmbed()
            .setColor('#ffff00') //set a color
            .setTitle('Test embed') //set a title
            .setURL('https://github.com/AntoDipp') //set an url
            .setAuthor('Author', 'https://cdn.discordapp.com/avatars/558330899645726720/e78e56dc026c3fe6d057838bb432e8c3.png?size=4096') //set an Author and an image
            .setDescription('ciaooo') //set a description
            .setThumbnail('https://cdn.discordapp.com/attachments/871786401207840878/918129249565704232/github.png') //set a thumbnail
        //add some Fields
            .addFields(
                { name: 'Filed 1', value: 'Hiii' },
                { name: 'Filed 2', value: ':3' },
            )
            .addField('Filed 3', 'Thanks Anto!')
            .setTimestamp() //set a Timestamp
            .setFooter('End', 'https://cdn.discordapp.com/emojis/805926992247521340.png?size=4096'); //set a Footer

        message.channel.send({ content: 'Description', embeds: [embed] }); //send the embed
    }
}
