import client, { commands } from "../client.ts";

const DEFAULT_PREFIX = "dk!";
const NAME_SUFFIX = "kario";

export default () =>
    client.on("messageCreate", (message) => {
        if (message.author.bot) return;

        const command = message.content
            .split(" ")[0]
            .slice(DEFAULT_PREFIX.length)
            .toLowerCase();

        const cmd = commands.get(command);
        if (cmd) cmd.run(message);
    });
