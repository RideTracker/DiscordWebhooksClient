import Client from "..";
import { Embed } from "../models/Embed";

export default function sendWebhook(client: Client, content: string, embeds?: Embed | Embed[]) {
    let embedsResult = undefined;

    if(embeds !== undefined) {
        if(embeds.constructor === Array)
            embedsResult = embeds;
        else
            embedsResult = [ embeds ];
    }

    return fetch(`https://discord.com/api/webhooks/${client.clientId}/${client.clientToken}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content,
            embeds: embedsResult
        })
    });
};
