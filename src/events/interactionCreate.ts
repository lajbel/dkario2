import client, { commands } from "../client.ts";

export default () =>
    client.on("interactionCreate", (interaction) => {
        if (interaction.isApplicationCommand()) {
        }
    });
