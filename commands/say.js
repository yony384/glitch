exports.run = async(client, message, args) => {
    const Discord = require("discord.js");
    const sayMessage = args.join(" ");
   // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
   message.delete().catch(O_o=>{});
   // And we get the bot to say the thing:
   message.channel.send(sayMessage);
}
