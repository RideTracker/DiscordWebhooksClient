import Client, { sendWebhook } from "./dist/index.js";
import { Embed } from "./dist/models/Embed.js";

const client = new Client("1111364478349615206", "RXbrVTSA5mEzUNVenLJ9v0imJv4dHjcDGXKDSHpY4OiuaaG53MQdDxk1Kf8DOecLjA95");

const embed: Embed = {
    title: "Test Alarm",
    type: "rich",
    description: "This is a test alarm.",
    timestamp: new Date().toISOString(),
    color: 15105570,
    thumbnail: {
        url: "https://i.imgur.com/LNtU8Q3.png"
    },
    footer: {
        text: "Triggered automatically by RideTracker Service • Staging Environment"
    }
}

sendWebhook(client, "", embed).then((response) => {
    console.log({ url: response.url });
    
    response.text().then((result) => {
        console.log(result);
    });
})
