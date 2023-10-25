# ffxiv-subs-bot (temp)
This is a bot that we created in order to better manage our submarines with a team of people. The original goal is to ping a specific person (or group of people) when submarines are ready to be resent on a voyage.

[TODO: Add more about additional functionality, if there is ever more functionality]

[TODO: We need to come up with a more stylish name for the bot! Or not, I guess.]

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
- [`ngrok`](https://ngrok.com/): Let you open a port to receive requests. Best installed with [homebrew](https://brew.sh/).

### Setup project

Install the necessary dependencies by running the following command at the root of the project:

```
`npm install`
```

To setup the bot parameters, you need to create a `.env` file containing the following information at the root of the project:

```
APP_ID=<YOUR APP ID>
DISCORD_TOKEN=<YOUR DISCORD TOKEN>
PUBLIC_KEY=<YOUR PUBLIC KEY>
PORT=<THE PORT YOU WANT TO USE> [This is optional, the default port is 3000]
```

All of this information can be found [in your discord application](https://discord.com/developers/applications/).

### Install slash commands

The bot commands are setup in `command.js`. The `register` command, configured in `package.json`, installs slash commands:

```
npm run register
```

### Run the app

The app is run by using the command:

```
node bot/app.js
```

You also need to create an endpoint where discord can send requests (interactions, in particular). This is achieved with `ngrok`:

```
ngrok http <PORT>
```

By default, the app uses port `3000`.

It should display something like this:

```

Tunnel Status                 online
Version                       2.0/2.0
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://1234-someurl.ngrok.io -> localhost:3000
Forwarding                    https://1234-someurl.ngrok.io -> localhost:3000

Connections                  ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```

You need to copy the forwarding address that starts with `https`. In your [app's settings](https://discord.com/developers/applications), on the *General Information* tab, paste the URL under *Interactions endpoint URL*, **and append `/interactions` to it**. In the above example, the URL becomes `https://1234-someurl.ngrok.io/interactions`.

If you forget the `/interactions`, discord won't let you save your changes.

Save your changes -- your app is now running and ready to be used!
