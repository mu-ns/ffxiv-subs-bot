import 'dotenv/config';
import { InstallGlobalCommands } from './utils.js';

// Simple test command
const HELLO_COMMAND = {
  name: 'hello',
  description: 'Say hello to the bot!',
  type: 1,
};

const ALL_COMMANDS = [HELLO_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);