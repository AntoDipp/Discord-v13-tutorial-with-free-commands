//Add an emoji to the ping command!

const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'ping',
    emoji: `🏓`, //ad an emoji
    description : 'Pong!',
    run : async(client, message, args, Discord) => {
        const msg = await message.channel.send(`🏓 Pingando...`)
        const embed = new MessageEmbed()
            .setTitle('Quack')
            .setDescription(`API Ping ${client.ws.ping}ms\nBot ping ${Math.floor(msg.createdAt - message.createdAt)}ms`)
            await message.channel.send({ embeds: [embed] })
            msg.delete()
    }
}
