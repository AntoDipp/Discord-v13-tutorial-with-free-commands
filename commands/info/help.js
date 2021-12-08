const {
    MessageEmbed,
    Message,
    Client
} = require("discord.js"); //define Message and MessageEmbed
const {
    readdirSync
} = require("fs");
const client = require('../../index') //define client
const prefix = !; //ad your prefix (! is an example)
let color = "#ffff00"; //add your help color

const create_mh = require(`../../functions/menu.js`); //Here you need to create a function or the menu. Remember to create it before starting the bot; you find the code in the functions folder
//module
module.exports = {
    name: "help",
    emoji: `🙋`, //Add an emoji to your command. The emoji will also appear in the help menu. Check the readme file for more information
    description: "Help menù",
    run: async (client, message, args, Discord) => {

        let categories = []; //define the categories
        let cots = []; //define cots

        if (!args[0]) {

            let ignored = [
                "test"
            ]; //Here you can put categories not to show in the help menu

            const emo = {
          info: "ℹ️",
          minigames: "🎮",
          utility: "⚙️",
          pictures: "📸",
          nsfw: "🔞",
          moderation: "🛠",
            }//Here I set some basic categories for the bot; add them if you want but remember that they must match those in the menu function!
//Now we have to have the bot search all
         //the commands in the commands folder and create the various menus with the descriptions names categories etc... We also ignore the categories we do not want
            let ccate = [];
            readdirSync("./commands/").forEach((dir) => {
                if (ignored.includes(dir.toLowerCase())) return;
                const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
                    file.endsWith(".js")
                ); //search commands

                if (ignored.includes(dir.toLowerCase())) return;

                const name = `${emo[dir]} - ${dir}`; //define name
                let nome = dir.toUpperCase();

                let cats = new Object(); //Create page for commands

                cats = {
                    name: name,
                    value: `\`${prefix}help ${dir.toLowerCase()}\``,
                    inline: true
                }


                categories.push(cats);
                ccate.push(nome);
            });

            const embed = new MessageEmbed() //Create an embed
                .setTitle(`Help`) //The title on the main menu page
                .setDescription(`Prefix: \`${prefix}\`\nChoose a category or do \`${prefix}help [category]\` for see commands!`) //Here we put the description on the main page
                .setThumbnail('https://cdn.discordapp.com/attachments/871786401207840878/918129249565704232/github.png') //Set a custom Thumbnail
                .addFields(categories) //Add all categories
                .setFooter(
                    `Requested by ${message.author.tag}`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
                .setTimestamp() //set timestamp
                .setColor(color) //set color


            let menus = create_mh(ccate); //define all menus
            return message.reply({
                embeds: [embed],
                components: menus.smenu
            }).then((msgg) => {

                const menuID = menus.sid;

                const select = async (interaction) => { //Here we must make it clear that when we select a category the bot must change the page
                    if (interaction.customId != menuID) return;

                    let {
                        values
                    } = interaction;

                    let value = values[0];

                    let catts = [];

                    readdirSync("./commands/").forEach((dir) => {
                        if (dir.toLowerCase() !== value.toLowerCase()) return;
                        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
                            file.endsWith(".js")
                        );

//create a "map" for commands
                        const cmds = commands.map((command) => {
                            let file = require(`../../commands/${dir}/${command}`);

                            if (!file.name) return "No commands";

                            let name = file.name.replace(".js", "");

                            if (client.commands.get(name).hidden) return;

//Here we set descriptions and emojis in commands
                            let des = client.commands.get(name).description;
                            let emo = client.commands.get(name).emoji;
                            let emoe = emo ? `${emo} - ` : ``;

                            let obj = {
                                cname: `${emoe}\`${name}\``,
                                des
                            }

                            return obj;
                        });

                        let dota = new Object();

                        cmds.map(co => {
                            if (co == undefined) return;

                            dota = {
                                name: `${cmds.length === 0 ? "Wait" : co.cname}`,
                                value: co.des ? co.des : `No description`,
                                inline: true,
                            }
                            catts.push(dota)
                        });

                        cots.push(dir.toLowerCase());
                    });

                    if (cots.includes(value.toLowerCase())) {
                        const combed = new MessageEmbed()
                            .setTitle(`**${value.charAt(0).toUpperCase() + value.slice(1)} **`)
                            .setDescription(`Use \`${prefix}help\` for more info!.\nEx: \`${prefix}help ping\`.\n\n`)
                            .addFields(catts)
                            .setColor(color)

                        await interaction.deferUpdate();

                        return interaction.message.edit({
                            embeds: [combed],
                            components: menus.smenu
                        })
                    };

                };
//create the interactin and setup it!
                const filter = (interaction) => {
                    return !interaction.user.bot && interaction.user.id == message.author.id
                };

                const collector = msgg.createMessageComponentCollector({
                    filter,
                    componentType: "SELECT_MENU"
                });
                collector.on("collect", select);
                collector.on("end", () => null);

            });

        } else {
            let catts = [];

            readdirSync("./commands/").forEach((dir) => {
                if (dir.toLowerCase() !== args[0].toLowerCase()) return;
                const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
                    file.endsWith(".js")
                );


                const cmds = commands.map((command) => {
                    let file = require(`../../commands/${dir}/${command}`);

                    if (!file.name) return "No commands";

                    let name = file.name.replace(".js", "");

                    if (client.commands.get(name).hidden) return;


                    let des = client.commands.get(name).description;
                    let emo = client.commands.get(name).emoji;
                    let emoe = emo ? `${emo} - ` : ``;

                    let obj = {
                        cname: `${emoe}\`${name}\``,
                        des
                    }

                    return obj;
                });

                let dota = new Object();

                cmds.map(co => {
                    if (co == undefined) return;

                    dota = {
                        name: `${cmds.length === 0 ? "Wait" : prefix + co.cname}`,
                        value: co.des ? co.des : `No description`,
                        inline: true,
                    }
                    catts.push(dota)
                });

                cots.push(dir.toLowerCase());
            });

            const command =
                client.commands.get(args[0].toLowerCase()) ||
                client.commands.find(
                    (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
                );

            if (cots.includes(args[0].toLowerCase())) {
                const combed = new MessageEmbed()
                    .setTitle(`**${args[0].charAt(0).toUpperCase() + args[0].slice(1)}**`)
                    .setDescription(`Use \`${prefix}help\` for more info.\nEx: \`${prefix}help ping\`.\n\n`)
                    .addFields(catts)
                    .setColor(color)

                return message.reply({
                    embeds: [combed]
                })
            };

            if (!command) {
                const embed = new MessageEmbed()
                    .setTitle(`Invalid command! Use \`${prefix}help\` for see all commands!`) //If the command in the help menu does not exist the bot returns this error
                    .setColor("RED");
                return await message.reply({
                    embeds: [embed],
                    allowedMentions: {
                        repliedUser: false
                    },
                });
            }

            const embed = new MessageEmbed() //This is for commmand help ex: !help ping
                .setTitle("Details:")
                .addField(
                    "Command:",
                    command.name ? `\`${command.name}\`` : "No name"
                )
                .addField(
                    "Aliases:",
                    command.aliases ?
                    `\`${command.aliases.join("` `")}\`` :
                    "No aliases"
                )
                .addField(
                    "Use:",
                    command.usage ?
                    `\`${prefix}${command.name} ${command.usage}\`` :
                    `\`${prefix}${command.name}\``
                )
                .addField(
                    "Description:",
                    command.description ?
                    command.description :
                    "No description"
                )
                .setFooter(
                    `Richiesto da ${message.author.tag}`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
                .setTimestamp()
                .setColor(color);
            return await message.reply({
                embeds: [embed]
            });
        }
    },
}; 
