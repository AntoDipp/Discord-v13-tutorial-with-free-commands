const chalk = require(`chalk`); //we need chalk
const {
    MessageSelectMenu,
    MessageActionRow
} = require(`discord.js`);

const create_mh = (
    array
) => {

    if (!array) throw new Error(chalk.red.bold(`Click here!`));
    if (array.length < 0) throw new Error(chalk.red.bold(`Select!`));
    let select_menu;

    let id = `help-menus`;

    let menus = [];

    const emo = {
          info: "ℹ️",
          minigames: "🎮",
          utility: "⚙️",
          pictures: "📸",
          nsfw: "🔞",
          moderation: "🛠",
    }

    array.forEach(cca => {
        let name = cca;
        let sName = `${name.toUpperCase()}`
        let tName = name.toLowerCase();
        let fName = name.toUpperCase();

        return menus.push({
            label: sName,
            description: `${tName} comandi!`,
            value: fName
        })
    });

    let chicken = new MessageSelectMenu()
        .setCustomId(id)
        .setPlaceholder(`Choose a category!`)
        .addOptions(menus)

    select_menu = new MessageActionRow()
        .addComponents(
            chicken
        );


    return {
        smenu: [select_menu],
        sid: id
    }
}

module.exports = create_mh;
