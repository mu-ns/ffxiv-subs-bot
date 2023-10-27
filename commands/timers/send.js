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
    )
    .addStringOption((option) =>
      option
        .setName("note")
        .setDescription("To keep track of what this timer is for")
        .setRequired(false)
    ),
  async execute(interaction) {
    const SECS_PER_HOUR = 60 * 60;
    const SECS_PER_MIN = 60;
    const hours = interaction.options.getInteger("hours");
    const mins = interaction.options.getInteger("minutes");
    const note = interaction.options.getString("note") ?? "";

    const start_time = interaction.createdTimestamp; // in milliseconds
    const unix_start_time = Math.floor(start_time / 1000); // converts to unix time
    const unix_end_time =
      unix_start_time + hours * SECS_PER_HOUR + mins * SECS_PER_MIN;

    const channel = interaction.channel;

    reply = "";

    if (note == "")
      reply = `Timer set: Finishes <t:${unix_end_time}:F>, which is <t:${unix_end_time}:R>`;
    else
      reply = `${note}: Finishes <t:${unix_end_time}:F>, which is <t:${unix_end_time}:R>`;

    // send the required messages
    // await channel.send("@everyone"); // this is how to ping everyone
    await interaction.reply({ content: reply, ephemeral: false }); // set ephemeral to true once /timers is implemented
  },
};
