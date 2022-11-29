import {ExceptionHandler} from "../../utils/api.js";
import Logger from "../../utils/logger.js";

const {log} = new Logger('app:api:middleware:handlers:404', "Error 404 - Middleware");

const handler404 = async (req, res, next) => {
    const exceptionHandler = new ExceptionHandler(log, null, res, {
        endpoint: req.originalUrl,
        method: req.method,
        ip: req.ip
    });

    return exceptionHandler.execute("SYS_002");
}

export default handler404;
