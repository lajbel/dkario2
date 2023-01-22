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
    useSuffix?: boolean;
    perms?: string[];
}
