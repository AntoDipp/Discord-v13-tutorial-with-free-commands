const { MessageEmbed } = require('discord.js') //define MessageEmbed

//bot module
module.exports = {
    name: 'ping', //slash command name
    description: 'Mostra il ping del bot!', //slash command description
    run: async (client, interaction, options) => {
       const msg = await interaction.followUp(`🏓Ping del bot: ${client.ws.ping}ms`) //we define the message that the bot must send after the user has done the interaction
    }
}
