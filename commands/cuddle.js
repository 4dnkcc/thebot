const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to cuddle them");
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/cuddle");
    
    message.channel.send(`OwO, ${message.author.username} cuddled ${message.mentions.users.first().username}`)
    message.channel.send(body.url) 
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'cuddle',
    description: 'Cuddles someone OwO',
    usage: 'cuddle'
  };