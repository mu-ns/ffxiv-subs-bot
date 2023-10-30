const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hello")
    .setDescription("Hello world!"),
  async execute(interaction) {
    await interaction.reply({
      content:
        "oUtPut mAXimiZeD, BUg mAss pROducTIOn... <bleep> hELLo, WOrlD!?",
      ephemeral: true,
    });
  },
};
