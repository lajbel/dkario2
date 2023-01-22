import {
    ApplicationCommandPartial,
    ApplicationCommandInteraction,
    Message,
} from "harmony";

export interface CombinedCommand extends ApplicationCommandPartial {
    category: string;
    run: (
        ctx: Message | ApplicationCommandInteraction,
        options?: any
    ) => void | Promise<void>;
    onlyMessage?: boolean;
    onlySlash?: boolean;
    perms?: string[];
}
