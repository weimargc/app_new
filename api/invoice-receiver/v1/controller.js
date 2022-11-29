import {ExceptionHandler, response} from "../../../utils/api.js";
import Logger from "../../../utils/logger.js";
import {invoiceModel} from "./model.js";
import documanagerService from "./services/documanager/service.js";

const {log} = new Logger('app:api:invoice-receiver:v1:controller', "Invoice Receiver Controller - V1");

export const createQuery = async (req, res) => {
    const {model, data} = invoiceModel(req.body);
    const exceptionHandler = new ExceptionHandler(log, "CreateQuery", res, {
        username: req?.user?.username,
    });

    const { valid, errors } = model.validate();

    if(!valid) {
        return exceptionHandler.execute(errors);
    }

    const documentData = await documanagerService.sendDocument(data);




    return response(res, { message: "Invoice received successfully" })
}
