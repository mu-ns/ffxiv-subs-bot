const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription(
      "Displays information about the how to use the bot, including helpful links and resources."
    ),
  async execute(interaction) {
    await interaction.reply("[info command text]");
  },
};
