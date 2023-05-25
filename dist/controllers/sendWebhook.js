"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sendWebhook(client, content, embeds) {
    let embedsResult = undefined;
    if (embeds !== undefined) {
        if (embeds.constructor === Array)
            embedsResult = embeds;
        else
            embedsResult = [embeds];
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
}
exports.default = sendWebhook;
;
