export class AppCommand {
    /**
     * @param {string} name - name of the command
     * @param {function} runCommand - function called when the command is run, takes the interaction request and result as arguments
     */
    constructor(name, runCommand) {
        this.name = name
        this.runCommand = runCommand
    }
}