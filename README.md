# This tutorial is incomplete. I will update it as soon as I can.

## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
![Downloads](https://img.shields.io/github/downloads/AntoDipp/Discord-v13-tutorial-with-free-commands/total)
![Activity](https://img.shields.io/github/commit-activity/m/AntoDipp/Discord-v13-tutorial-with-free-commands)

# Before you start

The tutorial was created to help you update your bot to version 13 of Discord. If you want to create a bot without knowing anything about Javascript change tutorial! If you know the basics you are instead in the right place. A Youtube tutorial will be created in the future (if required)

To access the various pages of the tutorial click on main! [How to access branches](https://user-images.githubusercontent.com/52698241/145105358-4f48bc82-2880-41bf-88fc-bb8474fd9c43.png)

## Installation

Please install [the latest version of Node.js here](https://nodejs.org)

# If you use Repl.it follow this tutorial

Copy this to repl.it shell:

```bash
npm init -y && npm i --save-dev node@16 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH
```

Create a file with this name: .replit
and put this code:

```bash
run="npm start"
```
Make sure your package.json looks like this:

```bash
{
  "name": "Il-test-del-tutorial-di-git",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
  "start": "node ."
},
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "discord.js": "^13.3.1"
  },
  "devDependencies": {
    "node": "^16.13.1"
  },
  "description": ""
}
```
Perfect you finished; now install the package below

# Important package:
```bash
discord.js
```
## Authors

- [@AntoDipp](https://www.github.com/AntoDipp)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change

## Credits

This tutorial will use handlers and some events of [Reconlx](https://github.com/reconlx)

## License
[MIT](https://choosealicense.com/licenses/mit/)
