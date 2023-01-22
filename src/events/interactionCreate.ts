import client, { commands } from "../client.ts";

export default () =>
    client.on("interactionCreate", (interaction) => {
        if (interaction.isApplicationCommand()) {
            const cmd = commands.get(interaction.name);
            if (cmd && !cmd.onlyMessage) cmd.run(interaction);
        }
    });
