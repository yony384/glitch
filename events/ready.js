module.exports = client => {
  console.log(
    `Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds. Logged in with ${client.user.tag} With ID: ${client.user.id}`
  );
  client.user.setActivity("With Adva", { type: "PLAYING" });

};
