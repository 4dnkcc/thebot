const Discord = require('discord.js');
const superagent = require('superagent');
const sf = require("snekfetch");

exports.run = async (client, message, args) => {
    const { body } = await superagent
    .get("http://aws.random.cat/meow");
    message.channel.send(body.file) 
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'cat',
    description: 'Sends a random cat',
    usage: 'cat'
  };
   