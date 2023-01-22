import { Embed, Message } from "harmony";
import { CombinedCommand } from "../types.ts";
import { commands } from "../client.ts";
import { EMBED_COLOR, GIFS } from "../constants.ts";

const cmd: CombinedCommand = {
    name: "help",
    category: "core",
    description: "cmd_help_description",
    run(ctx) {
        const coll: any = {};

        const cmds = [...commands.values()];

        cmds.forEach((c) => {
            if (coll[c.category!]) return;

            coll[c.category] = cmds.filter((c2) => c2.category === c.category);
        });

        const embed = new Embed()
            .setColor(EMBED_COLOR)
            .setTitle("DK! DKario")
            .setDescription("Aquí estan mis comandos bro")
            .setFooter(`DKario 2.0.0 | <@947683287369912330>`)
            .setImage(GIFS["dk!help"]);

        for (const category of Object.keys(coll)) {
            const title = category;
            let desc = "";

            for (const cmd of coll[category]) {
                desc += `\`${cmd.name}\` `;
            }

            embed.addField({ name: title, value: desc });
        }

        if (ctx instanceof Message) ctx.reply({ embeds: [embed] });
        else ctx.reply({ embeds: [embed] });
    },
};

export default cmd;
