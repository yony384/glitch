const Discord = require("discord.js");
const fetch = require("node-fetch");

exports.run = async (bot, message, args) => {
    let searchMessage = await message.channel.send("🔍 Searching for a meme...");

    try {
        let response = await fetch("https://meme-api.com/gimme");
        let json = await response.json();

        if (!json || !json.url || !json.title) {
            return searchMessage.edit("❌ Failed to fetch a meme. Try again later!");
        }

        const embed = new Discord.RichEmbed()
            .setTitle(json.title)
            .setURL(json.postLink)
            .setColor("#36393F")
            .setImage(json.url)
            .setFooter(`👍 ${json.ups} | From ${json.subreddit}`);

        searchMessage.edit({ embed });
    } catch (err) {
        console.error("❌ Error fetching meme:", err);
        searchMessage.edit("❌ An error occurred while fetching a meme.");
    }
};

module.exports.help = {
    name: "memes"
};
