import { AppCommand } from "./appCommand.js"
import { InteractionResponseType, } from 'discord-interactions'

export const helloCommand = new AppCommand("hello", function (req, res) {
    return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: 'oUtPut mAXimiZeD, BUg mAss pROducTIOn... <bleep> hELLo, WOrlD!?',
        },
    });
})