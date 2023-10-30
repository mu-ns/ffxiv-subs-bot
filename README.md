# ffxiv-subs-bot
This is a bot that we created in order to better manage our free company's submarines with a team of people. The original goal is to ping a specific person (or group of people) when submarines are ready to be resent on a voyage.

[TODO: A catchier name?]

## Commands
| Command      | Description |
| ------------ | ----------- |
| `/info` | Displays information about the how to use the bot, including helpful links and resources. |
| `/set` | Sets a timer for when a submersible will return, pinging `@everyone` who can access the channel. Can set an optional note to keep track of what the timer is for. |
| `/timers` | Displays all in-progress timers. |

## Features
### Minimum Viable Product
- Can set a timer to ping (and/or DM) in Discord when the timer runs out (i.e. when the submarine voyage is over)
  - Implemented using native slash commands in Discord
  - For this release, one can just set unlimited timers and maybe a note to keep track of what that timer is for 
- Basic "permission system" so only timers set in that channel can be viewed

### Planned Features
- Plan how to store submarine data in a scalable fashion
  - Registering submarines' names/parts/rank (and rank progress)
  - Persistent timers for each submarine
  - Unique identifiers for each submarine in order to share/follow anyone's submarine!
  - Permission system to ensure only registered users mess with your submarine
- [Mogship](https://www.mogship.com/) integration 
  - To automatically calculate EXP gain and suggest optimal routes
  - Can look into creating an API to input submarine data to find routes, etc.
- Dalamud plugin to read data from the game and set the timer automatically when the player sends a submarine on an expedition

## Running Locally

### Prerequisites

- [NodeJS](https://nodejs.org/en/download): Javascript framework

Install the necessary dependencies by running the following command at the root of the project:

```
npm install
```

To set up the bot parameters, you need to create a `.env` file containing the following information at the root of the project:

```
APP_ID=<YOUR APP ID>
DISCORD_TOKEN=<YOUR DISCORD TOKEN>
PUBLIC_KEY=<YOUR PUBLIC KEY>
STORAGE_PATH=<PATH TO STORE TIMERS DATA>
```

All of this information can be found [in your Discord application](https://discord.com/developers/applications/).

### Deploy Commands

The bot commands are setup in `deploy-commands.js`:

```
node deploy-commands.js
```

### Run

You can run the bot by using the command:

```
node .
```
