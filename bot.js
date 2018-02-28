//load discord.js library
const Discord = require('discord.js');

//Generate bot
const bot = new Discord.Client();

//Get private token
const auth = require("./auth.json");

//over every single message recieved
bot.on("message", async message => {
	//(block "botception").
	if(message.author.bot) return;

	//Epic & pretty demanded función in every bot
	if (message.content === 'ping')
    		message.reply('pong');

	//ignore any command whitout prefix command
	if(message.content.indexOf(auth.prefix) !== 0) return;

	//Ussage prefix[command] [argv0]...[argvN]
	const args = message.content.slice(auth.prefix.length).trim().split(/ +/g);
  	//Parse command to standar type
	const command = args.shift().toLowerCase();

	//echo command
	if(command === "echo") {
	const echo = args.join(" ");
	message.delete().catch(O_o=>{});
	message.channel.send(echo);
	}
});


bot.login(auth.token);
