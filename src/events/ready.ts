import client from "../client.ts";

export default () =>
    client.on("ready", () => {
        console.log("DKario 2.0 connected");
    });
