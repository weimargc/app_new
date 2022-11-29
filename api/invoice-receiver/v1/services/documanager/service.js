import Logger from "../../../../../utils/logger.js";
import {convertToXml} from "../../../../../utils/xml.js";
const {log} = new Logger('app:api:invoice-receiver:v1:services:documanager', "Documanager Service");

const sendDocument = async (document) => {
    const xml = convertToXml(document);
    log("Document XML: " + xml);
    return xml;
}

export default {
    sendDocument: log(sendDocument, {
        start: ({UploadRequest}) =>`New document to send to documanager for ClientId: '${UploadRequest.ClientId}'`,
        success: (result, {UploadRequest}) => `Succesfuly sent document to documanager for ClientId: '${UploadRequest.ClientId}'`,
    })
}
