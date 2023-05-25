import sendWebhook from "./controllers/sendWebhook";

export default class Client {
    clientId: string;
    clientToken: string;

    constructor(clientId: string, clientToken: string) {
        this.clientId = clientId;
        this.clientToken = clientToken;
    };
};

export { sendWebhook };
