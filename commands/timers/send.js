const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("send")
    .setDescription("Sets a timer for when a submersible will return.")
    .addIntegerOption((option) =>
      option
        .setName("hours")
        .setDescription("Hours until you want to be notified")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("minutes")
        .setDescription("Minutes until you want to be notified")
        .setRequired(true)
    ),
  async execute(interaction) {
    const hours = interaction.options.getInteger("hours");
    const mins = interaction.options.getInteger("minutes");

    await interaction.reply(`${hours} ${mins}`);
  },
};
