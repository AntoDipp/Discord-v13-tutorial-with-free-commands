# This part might be difficult; that’s why it’s full of notes to help you! Here we’ll talk about handlers, events and slash commands
# As we will talk about Slash Commands I tell you that from here the bot in the permissions of Oauth2 must have the cues on "bot" and "applications.commands"
Need help? [Click here](https://user-images.githubusercontent.com/52698241/145125369-f9b27c13-f0c2-49d3-b58e-cef4482b4e6f.png) to see a screen!


## Handlers
With handlers we create more order in the bot code and we can split commands into categories!
Here’s how to create them:
1) Create a folder named "handler" and create a file named "index.js" inside this folder (here you open the index.js in the handler folder to understand more)

2) Before defining handlers in the index we will have to create "Collections" of the different commands: this defines to the bot the name of the command, if it is a normal command or if it is slash (therefore the type of command) and the aliases!

3) We have to tell the bot index that the handlers serve and then we edit the index

## Events
Thanks to the handlers now the bot will also load events! Then we create a folder named "events"
We subdivide the various creations of the files:

1) It is important to create the file "Messagecreate.js" which allows the bot to know when to reply and when not. So we edit that file following the notes I wrote.

2) In addition to this file we also have to say what the bot must do when it is online; so we create "ready.js" and edit it always following my notes.

3) With discord.js version 13 the best news is the various interactions in bots! To create them, however, we have to define an event. We then create a file named "interactionCreate.js" and edit it as I wrote it!

Now that we’ve finished talking about events and handlers we try to figure out how to create commands and where to put them and types

# Create a normal command
First we create a folder called "commands" and inside we can create other folders with names that we want. We create the folder "info" where we create the file ping.js. So now we edit ping.js and when we do ping the bot will reply!
Remember that for each command this module must be respected

```bash
module.exports = {
name: 'ping',
aliases: ['latency'],
description : 'Pong! ',
run: async (client, message, args, Discord) => {
```

If we use a particular command that requires special permissions then just add under description ```Userperms: ['permission'],``` or ```Botperms: ['permission'],```

# Create SlashCommands
The same thing about commands only that the main folder is called Slashcommands
