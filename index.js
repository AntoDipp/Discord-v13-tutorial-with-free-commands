const { Collection, Client } = require('discord.js');
const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
    ],
}); //define the client
module.exports = client; //module.exports
client.commands = new Collection() //create a new Collection for commands
client.prefix = "your prefix here"//put your prefix with ""
client.aliases = new Collection() //create a new Collection for aliases
client.slashCommands = new Collection(); //create a new Collectio for Slash Commands

require('./handler')(client); //let the bot understand that he must use handlers

client.login(process.env.token)
