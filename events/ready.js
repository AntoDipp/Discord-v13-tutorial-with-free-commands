const client = require('../index') //define the client
//now we define some bot status
const arrayOfStatus = [
    'A simple bot status',
    'Beep Boop',
    'Test',
    'Hi humans!'
]
//when the bot is online must do the following things:
client.on('ready', () => {
    console.log(`${client.user.tag} is alive :D`)
  //now we set an interval for change bot status
    setInterval(() => {
        client.user.setPresence({ activities: [{ name: arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)] }], status: 'idle', type: "WATCHING" }) //let’s let the bot choose which status to show
    }, 15000)
})
