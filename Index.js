const Discord = require('discord.js');
const { prefix, token, } = require('./config.json');
const config = require('./config.json');
const client = new Discord.Client();
const { accounts, } = require('./accounts.json');
const { accounts1, } = require('./accounts1.json');
const {MessageEmbed } = require('discord.js');


client.once('ready', () => {
 console.log("Ready!")
})

client.on("message", message => {
    console.log(message.content);

})

client.on('ready', () => {

    client.user.setActivity('Generating Accounts', {
        type: 'PLAYING'
    });
});

client.on("guildMemberAdd", (member) => {
  console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
  member.guild.channels.get("general").send(`"${member.user.username}" has joined this server`);
});

client.on('message', message => {
	    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err)
	}
	
    if(message.content.startsWith(`${prefix}Nordvpn`)) {
        if(message.channel.type == "text") {

            let result = Math.floor((Math.random() * accounts.length))
			
             const embed = new MessageEmbed()
			.setTitle("Your account")
			.setDescription('Here is your account: \"' + accounts[result] + "\"")
			message.author.send(embed)
            .catch()
        }
    }

    if(message.content.startsWith(`${prefix}Spotify`)) {
        if(message.channel.type == "text") {

            let result = Math.floor((Math.random() * accounts1.length))

             const embed = new MessageEmbed()
			.setTitle("Your account")
			.setDescription('Here is your account: \"' + accounts1[result] + "\"")
			message.author.send(embed)
            .catch()
        }
    }
})

client.login(token);
