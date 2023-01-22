import { Client } from "harmony";
import { CombinedCommand } from "./types.ts";
import "dotenv/load";

const client = new Client({
    intents: ["GUILDS", "DIRECT_MESSAGES", "GUILD_MESSAGES"],
});

export default client;

export const commands: Map<string, CombinedCommand> = new Map();
export const components = new Map();

// Import all events with for of loop and Deno
for (const file of Deno.readDirSync("./src/events")) {
    if (file.isFile && file.name.endsWith(".ts")) {
        import(`./events/${file.name}`)
            .then((m) => {
                m.default();
                console.log("a");
            })
            .catch((e) => {
                console.log(e);
            });
    }
}

for (const file of Deno.readDirSync("src/commands/")) {
    import(`./commands/${file.name}`).then(async (mod) => {
        const command = mod.default;

        commands.set(command.name, command);

        console.log("d");

        for await (const guild of client.guilds) {
            client.interactions.commands.create(
                {
                    name: command.name,
                    // @ts-ignore a
                    description: langs[lang][command.description],
                    options: command.options,
                },
                guild.id
            );
        }
    });
}

// Connect to gateway
client.connect();
