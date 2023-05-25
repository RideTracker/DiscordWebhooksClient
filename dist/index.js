"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWebhook = void 0;
const sendWebhook_1 = __importDefault(require("./controllers/sendWebhook"));
exports.sendWebhook = sendWebhook_1.default;
class Client {
    constructor(clientId, clientToken) {
        this.clientId = clientId;
        this.clientToken = clientToken;
    }
    ;
}
exports.default = Client;
;
