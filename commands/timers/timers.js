const { SlashCommandBuilder } = require("discord.js");
const dataManager = require("../../data/dataManager.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("timers")
    .setDescription("Displays all in-progress timers."),
  async execute(interaction) {
    const data = dataManager.getTimers();
    var noTimers = true;
    message = "";

    if (data.timers.length > 0) {
      message = "## Here are the current timers:";
      for (let timer of data.timers) {
        if (timer.channel_id == interaction.channel.id) {
          noTimers = false;
          var note = "Unnamed timer";
          if (timer.note != "") {
            note = timer.note;
          }
          message += `\n> - ${note}: Finishes <t:${timer.unix_end_time}:F>, which is <t:${timer.unix_end_time}:R>`;
        }
      }
    }

    if (noTimers)
      message =
        "There are no timers to be displayed. Use the `/set` command to create a timer!";
    await interaction.reply({ content: message, ephemeral: true });
  },
};
