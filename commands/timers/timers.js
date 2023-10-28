const { SlashCommandBuilder } = require("discord.js");
const dataManager = require('../../data/dataManager.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName("timers")
    .setDescription("Displays all in-progress timers."),
  async execute(interaction) {

    const data = dataManager.getTimers()
    message = ''

    if (data.timers.length > 0) {

      message = "## Here are the current timers:"
      for (let timer of data.timers) {
        message += `\n> - ${timer.note}: Finishes <t:${timer.unix_end_time}:F>, which is <t:${timer.unix_end_time}:R>`
      }
    }
    await interaction.reply({ content: message, ephemeral: true });
  },
};
