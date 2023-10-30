# ffxiv-subs-bot (temp)
This is a bot that we created in order to better manage our submarines with a team of people. The original goal is to ping a specific person (or group of people) when submarines are ready to be resent on a voyage.

[TODO: Add more about additional functionality, if there is ever more functionality]

[TODO: We need to come up with a more stylish name for the bot! Or not, I guess.]

## Commands
| Command      | Description |
| ------------ | ----------- |
| `/info` | Displays information about the how to use the bot, including helpful links and resources. |
| `/set` | Sets a timer for when a submersible will return, pinging `@everyone` who can access the channel. Can set an optional note to keep track of what the timer is for. |
| `/timers` | Displays all in-progress timers. |

## Planned Features
### Minimum Viable Product
- Set timer to ping (and/or DM) in Discord when the timer runs out (i.e. when the submarine voyage is over)
  - For this MVP, can just set unlimited timers and maybe a note to put the submarine name down? 
  - See if Discord has the ability to save this data directly rather than having the bot save data on its own
- Slash commands and alisases to set timer(s)

### For the Future
- Brainstorm how to store submarine data in a scalable fashion
  - Registering submarines/names/parts/rank (and rank progress)
  - Keeping track of all relevant information in order to suggest optimal routes
  - Persistent timers for each submarine
- Mogship integration to help automatically calculate exp gain
  - Can look into scrapers to input submarine data in to find routes, etc. as well
- Dalamud plugin to scrape data from the game and set the timer automatically when the player sends a submarine on an expedition

## Related Notion Tasks (temp)
When the bot is ready to be "shipped," all relevant information from these pages _should_ be documented here already!
- [ffxiv-subs-bot init](https://www.notion.so/snowhawkeye/ffxiv-subs-bot-init-fe036afba3704ccabf325626648b3ca8?pvs=4)

---

## Running the bot locally

### Prerequisites

- [NodeJS](https://nodejs.org/en/download): Javascript framework.

### Setup project

Install the necessary dependencies by running the following command at the root of the project:

```
npm install
```

To setup the bot parameters, you need to create a `.env` file containing the following information at the root of the project:

```
APP_ID=<YOUR APP ID>
DISCORD_TOKEN=<YOUR DISCORD TOKEN>
PUBLIC_KEY=<YOUR PUBLIC KEY>
STORAGE_PATH=<PATH TO STORE TIMERS DATA>
```

All of this information can be found [in your discord application](https://discord.com/developers/applications/).

### Install slash commands

The bot commands are setup in `deploy-commands.js`:

```
node deploy-commands.js
```

### Run the bot

You can run the bot by using the command:

```
node .
```
