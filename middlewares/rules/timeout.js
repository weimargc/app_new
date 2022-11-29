import config from "config";
import {ExceptionHandler} from "../../utils/api.js";
import Logger from "../../utils/logger.js";
const {log} = new Logger('app:api:middleware:handlers:timeout', "Timeout - Middleware");

const timer = config.get('timer.timeout');

const timeout = async (req, res, next) => {
    const exceptionHandler = new ExceptionHandler(log, null, res, {
        endpoint: req.originalUrl,
        method: req.method,
        ip: req.ip,
        maxTime: `${timer/1000}s`
    });
    next();
    setTimeout(() => {
        if (res.headersSent) return;
        req.timedout = true;
        return exceptionHandler.execute("SYS_003");
    }, timer);
}

export default timeout;

