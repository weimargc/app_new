import config from "config";
import Logger from "../../../../../utils/logger.js";
import AmqClient from "./client.js";

const {log} = new Logger('app:api:invoice-receiver:v1:services:amq', "AMQ Service");

const client = new AmqClient(config.get('amq'));

const sendDocument = async (document) => {
    return await client.send(document);
}

export default {
    sendDocument: log(sendDocument, {
        start: "New document to send to AMQ",
        success: res => `Succesfuly sent document to AMQ with response: ${res}`
    }),
}

