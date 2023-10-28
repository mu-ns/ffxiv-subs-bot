const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription(
      "Displays information about the how to use the bot, including helpful links and resources."
    ),
  async execute(interaction) {
    const reply = `
# Welcome to \`ffxiv-subs-bot\`!

This is a bot that we created in order to better manage our submarines with a team of people. The original goal is to ping a specific person (or group of people) when submarines are ready to be resent on a voyage.

For now, there are only two commands, \`send\` and \`timers\`. We will add the ability to register submarines and store information about them in a future update!

### For more detailed information about this bot, please [check out our GitHub repository](https://github.com/mu-ns/ffxiv-subs-bot)!
    `;

    await interaction.reply({ content: reply, ephemeral: true });
  },
};
