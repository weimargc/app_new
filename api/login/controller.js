import obfuscatorEmail from "obfuscator-email";
import {ExceptionHandler, response} from "../../utils/api.js";
import Logger from "../../utils/logger.js";
import {credentialModel} from "./model.js";
import authService from "./services/auth/service.js";
const {log} = new Logger('app:api:login:controller', "Auth Controller");

export const authentication = async (req, res) => {
    const {model, data: {username, password}} = credentialModel(req.query);

    const exceptionHandler = new ExceptionHandler(log, "Authentication", res, {
        username: username ? obfuscatorEmail(username) : undefined,
        password: password ? "********" : undefined,
    });

    const { valid, errors } = model.validate();

    if(!valid) {
        return exceptionHandler.execute(errors);
    }

    try {
        const checkResult = await authService.checkCredentials(username, password);
        if (!checkResult) {
            return exceptionHandler.execute("AH_001");
        }
    } catch (e) {
        return exceptionHandler.execute("AH_004");
    }

    try {
        const token = await authService.generateToken(username);
        return response(res, {token});
    } catch (e) {
        return exceptionHandler.execute("AH_005");
    }
}
