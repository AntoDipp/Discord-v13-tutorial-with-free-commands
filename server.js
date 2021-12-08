const express = require('express'); //install express
const server = express(); //create a server with express


server.all('/', (req, res) => {
   res.setHeader('Content-Type', 'text/html');
   res.write('<link href="https://fonts.googleapis.com/css?family=Roboto Condensed" rel="stylesheet"> <style> body {font-family: "Roboto Condensed";font-size: 22px;} <p>Hosting Active</p>');

   res.end();
});

module.exports = function() {
    server.listen(3000, () => console.log('Server is now online.'));
};
//now go on uptimerobot.com and create an account; add a new monitor; copy repl.it link (The link is above the "white box"; It should be in this format: https://replitprojectname.replitusername.repl.co
//follow this: monitor type: https - Friendly name: my bot - Url(s): repl.it server url - Monitoring Interval: every 5 minutes - Monitor timeout: in 30 seconds
//now create monitor and your bot will almost always be online (sometimes it could go offline for about 10 minutes; just wait or click run on repl.it)
