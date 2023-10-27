const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("timers")
    .setDescription("Displays all in-progress timers."),
  async execute(interaction) {
    await interaction.reply("[timers output text]");
  },
};
