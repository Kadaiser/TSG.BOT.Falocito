//load discord.js library
const Discord = require('discord.js');

//Generate bot
const bot = new Discord.Client();

//Get private token
const auth = require('./auth.json');

//Bot Boot Sequence (BBS)
bot.on('ready', function(){
	console.log('Falocito en marcha!');
});

//over every single message recieved
bot.on('message', async function(message){
	// Turns message it all into uppercase so it isn't case sensitive.
	let msg = message.content.toUpperCase(); 

	//(block "botception").
	if(message.author.bot) return;

	//Epic & pretty demanded función in every bot
	if (message.content === 'ping')
    		message.reply('pong');

	//ignore any command whitout prefix command
	if(message.content.indexOf(auth.prefix) !== 0) return;



	//Ussage prefix[command] [argv0]...[argvN]
	const args = message.content.slice(auth.prefix.length).trim().split(/ +/g);
	//delete mesagge 
	message.delete().catch(function(){});
  
	//Parse command to standar type
	const command = args.shift().toLowerCase();

	//echo command
	if(command === "echo") {
		const echo = args.join(" ");
		message.channel.send(echo);
	}
	if(command == "a"){
		const insult = args[0];
		message.channel.send(insult+' es gilipollas!');
	}

	if(command == "arzu"){
                message.channel.send('La culpa es de Marzu');
        }

	if(command == "ol"){
		var result = Math.floor(6*Math.random())+1;
                message.channel.send(message.author + " saco un " + result);
        }

});


bot.login(auth.token);
