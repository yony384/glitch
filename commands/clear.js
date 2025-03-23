exports.run = async(client, message, args) => {
    const Discord = require("discord.js");
    message.delete()
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 500)
      return message.reply("**Please provide a number between 2 and 500 for the number of messages to delete**");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`**Couldn't delete messages because of: ${error}**`));
}
