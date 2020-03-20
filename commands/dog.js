const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args, tools) => {
    const { body } = await superagent
    .get("http://random.dog/woof.json");
    //.get('https://dog.ceo/api/breeds/image/random');
    link = body.url;
    
    message.channel.send(body.url) 
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'dog',
    description: 'Sends a random doggo',
    usage: 'dog'
  };