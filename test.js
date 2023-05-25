"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_js_1 = require("./dist/index.js");
var client = new index_js_1.default("1111364478349615206", "RXbrVTSA5mEzUNVenLJ9v0imJv4dHjcDGXKDSHpY4OiuaaG53MQdDxk1Kf8DOecLjA95");
var embed = {
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
};
(0, index_js_1.sendWebhook)(client, "", embed).then(function (response) {
    console.log({ url: response.url });
    response.text().then(function (result) {
        console.log(result);
    });
});
