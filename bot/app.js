import 'dotenv/config';
import express from 'express';
import {
  InteractionType,
  InteractionResponseType,
} from 'discord-interactions';
import { VerifyDiscordRequest, getRandomEmoji, DiscordRequest } from './utils.js';
import { helloCommand } from './commands/helloCommand.js'

// Create an express app
const app = express();
// Get port, or default to 3000
const PORT = process.env.PORT || 3000;
// Parse request body and verifies incoming requests using discord-interactions package
app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));


// Interactions endpoint URL where Discord will send HTTP requests
app.post('/interactions', async function (req, res) {
  // Interaction type and data
  const { type, id, data } = req.body;

  // Handle verification requests
  if (type === InteractionType.PING) {
    return res.send({ type: InteractionResponseType.PONG });
  }

  // Handle slash command requests
  if (type === InteractionType.APPLICATION_COMMAND) {
    const allCommands = [ helloCommand ] // list of all commands
    const { name } = data;
    
    for(let command of allCommands) {
      if (name === command.name) { return command.runCommand(req, res) }
    }
  }
});


app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
