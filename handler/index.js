const { glob } = require('glob')
const { promisify } = require('util');
const { aliases } = require('..');

const globPromise = promisify(glob);

module.exports = async (client) => {

    const commandfiles = await globPromise(`${process.cwd()}/commands/**/*.js`);
    commandfiles.map((value) => {
        const file = require(value);
        const splitted = value.split('/');
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file }
            client.commands.set(file.name, properties)
        }
        if (file.aliases && Array.isArray(file.aliases)) { file.aliases.forEach(alias => client.aliases.set(alias, file.name)) }
    })


    const eventfiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventfiles.map((value) => require(value));

        const slashCommands = await globPromise(
        `${process.cwd()}/SlashCommands/*/*.js`
    );

    const arrayOfSlashCommands = [];
    slashCommands.map((value) => {
        const file = require(value);
        if (!file?.name) return;
        client.slashCommands.set(file.name, file);

        if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
        arrayOfSlashCommands.push(file);
    });
    client.on("ready", async () => {
        await client.guilds.cache
            .get("ID SERVER")
            .commands.set(arrayOfSlashCommands);

        // if you want global slash commands put this
        // await client.application.commands.set(arrayOfSlashCommands);
    });
}
//thanks to Reconlx for handlers and events
