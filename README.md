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