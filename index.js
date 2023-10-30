// Require the necessary discord.js classes
const { Client, Collection, Events, GatewayIntentBits } = require("discord.js");

// Other Imports
require("dotenv").config();
const token = process.env.DISCORD_TOKEN;
const fs = require("node:fs");
const path = require("node:path");
const { CronJob } = require("cron");
const { updateTimers } = require("./data/timerManager.js");
const dataManager = require("./data/dataManager.js"); // storage system

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Initialize the storage system
dataManager.initializeStorage();

// Retrieve commands from the command folder
client.commands = new Collection();
const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ("data" in command && "execute" in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
      );
    }
  }
}

// Log that the bot is ready for use
client.once(Events.ClientReady, () => {
  console.log("Ready!");

  // Start cron job for timers
  const job = new CronJob(
    "* * * * *", // cronTime (every minute)
    async function () {
      var now = new Date();
      console.log(`(${now.toString()}) Checking for timers... `);

      const toSend = updateTimers();

      // Sends messages if timers went off
      if (toSend.length > 0) {
        var index = 0;

        while (index < toSend.length) {
          var currTimer = toSend[index];
          var note = currTimer.note == "" ? "Unnamed timer" : currTimer.note;
          var msg = await `
@everyone
## Your submarine(s) have returned!

> - ${note}`;

          index++;

          // Checks for additional timers from same channel
          while (
            index < toSend.length &&
            toSend[index].channel_id == currTimer.channel_id
          ) {
            currTimer = toSend[index];
            note = currTimer.note == "" ? "Unnamed timer" : currTimer.note;
            msg += await `\n> - ${note}`;

            index++;
          }

          console.log("Finding channel...");
          channel = await client.channels.cache.get(currTimer.channel_id);
          console.log("Sending message...");
          channel.send(msg);
        }
      }

      console.log("Done checking for timers!");
    }, // onTick
    null, // onComplete
    true // start
  );
});

// Start listening to events
client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  }
});

client.login(token);
