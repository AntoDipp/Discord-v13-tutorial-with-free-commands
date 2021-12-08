const client = require('../index') //define the client

client.on("messageCreate", async (message) => { //the client catch a message
    if (message.author.bot || !message.guild) return
    if (!message.content.startsWith(process.env.PREFIX)) return; //add your prefix on process.env.PREFIX
    const [cmd, ...args] = message.content
        .slice(process.env.PREFIX.length) //add your prefix on process.env.PREFIX using a config.json file! so do const prefix = require('../config.json')
        .trim()
        .split(" ");
    const Discord = require('discord.js')
    let command = client.commands.get(cmd) //client get commands

    if (!command) command = client.commands.get(client.aliases.get(cmd)) //now we add all errors
    if (command) {
        if (!message.member.permissions.has(command.UserPerms || [])) return message.channel.send(`You need \`${command.UserPerms || []}\` for execute this command!`) //error if a member miss some perms

        if (!message.guild.me.permissions.has(command.BotPerms || [])) return message.channel.send(`I miss \`${command.BotPerms || []}\` for execute this command!`) //same but for bot

        await command.run(client, message, args, Discord)
    }
})
