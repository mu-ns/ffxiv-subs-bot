# Adding commands to the bot

## Step 1: Declare the command

In `/bot/commands.js`, add a constant containing the object declaring the command:

``` javascript
const HELLO_COMMAND = {
  name: 'hello',
  description: 'Say hello to the bot!',
  type: 1,
};
```

Refer to [the documentation](https://discord.com/developers/docs/interactions/application-commands#application-command-object) for indications on how to create a command.

You also want to add your constant to the `ALL_COMMANDS` array.

Don't forget to run `npm run register` to register the new commands. Global commands can take a little while to register, so don't worry if it doesn't appear right away in your server.

## Step 2: Create the logic to a command

All commands are stored into the `bot/commands` directory. In order to create a command, you should instantiate an `AppCommand`, defined in `appCommands.js`. That will let you define the `name` and the appropriate logic.

``` javascript
export const helloCommand = new AppCommand("hello", function (req, res) {
    return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: 'oUtPut mAXimiZeD, BUg mAss pROducTIOn... <bleep> hELLo, WOrlD!?',
        },
    });
})
```

## Step 3: Add the command to the app

In `bot/app.js`, simply import your instance of `AppCommand` and add it to the `allCommands` array. When receiving an `APPLICATION_COMMAND` interaction, the app will automatically loop through the array and look for any `name` matches, and execute the corresponding `runCommand` function.

``` javascript
// Handle slash command requests
if (type === InteractionType.APPLICATION_COMMAND) {
const allCommands = [ helloCommand ] // list of all commands
const { name } = data;

for(let command of allCommands) {
    if (name === command.name) { return command.runCommand(req, res) }
    }
}
```
