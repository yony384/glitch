const Discord = require("discord.js");


exports.run = async (client, message, args, color, prefix) => {
    if (message.author.id !== '737576561691328582' && message.author.id !== '493338731542216704' && message.author.id !== '592824143712616459' && message.author.id !== '357167937070563330') return;
  let users = client.users.size
  let servers = client.guilds.size
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('Evaluate')
        .setColor('RANDOM')
        .addField(':inbox_tray: Input', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Output', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}
