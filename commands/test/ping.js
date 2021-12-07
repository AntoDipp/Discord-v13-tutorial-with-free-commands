const { MessageEmbed } = require('discord.js') //define MessageEmbed

//This tutorial uses this type of template for the command module; if you are a professional you might try to change it
module.exports = {
    name : 'ping', //command name
    description : 'Pong!', //command description
    run : async(client, message, args, Discord) => {
        const msg = await message.channel.send(`🏓 Ping...`) //The bot at the beginning sends this message
        const embed = new MessageEmbed() //define embed
            .setTitle('Quack')
            .setDescription(`API ping ${client.ws.ping}ms\nBot ping ${Math.floor(msg.createdAt - message.createdAt)}ms`)
            await message.channel.send({ embeds: [embed] }) //Important: remember that from version 13 embed have this format!
            msg.delete() //the bot deletes the message it sent at the beginning as it managed to get ping!
    }
}
