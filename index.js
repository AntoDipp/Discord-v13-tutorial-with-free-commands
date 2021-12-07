const { Discord, Client, Collection, MessageEmbed, Intents } = require('discord.js');
const client = new Client({ intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_INVITES']});
//const config = require('./config.json'); <=== Add this if you want to use a config.json file
client.on('ready', () => {
  console.log(`${client.user.tag} is alive :D`)
})

client.on('messageCreate', message => {
  if(message.content === "!test") {
    message.channel.send("This test is successful!")
  } else if(message.content === "hello") {
    message.channel.send("Hello!")
  }  
})

client.login(process.env.'put the name of your . env file with the bot token') //if you want to use a config.json file change process.env.token with config.token and remember that the token value in the config file must have the token name!
