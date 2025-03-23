const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let Rreason = args.join(" ") || "No reason provided";
  let voiceChannel = message.member.voiceChannel;
  let voiceStatus = voiceChannel ? `✅ ${voiceChannel.name}` : "❌ Not in a voice channel";

  const embed = new Discord.RichEmbed()
    .setColor("#76C9FF")
    .setTitle("🚨 Help Request")
    .setDescription(`<@&1351513204823556158>, ${message.author} needs help!`)
    .addField("🎤 Voice Status", voiceStatus, true)
    .addField("❔ Reason", Rreason, true)
    .setThumbnail(message.author.displayAvatarURL)
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL);

  // שולח את ההודעה עם אפשרות לתייג את הרול
  message.channel.send(`<@&1351513204823556158>`, embed);
};

module.exports.help = {
  name: "helpme"
};
