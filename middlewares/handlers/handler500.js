import {ExceptionHandler} from "../../utils/api.js";
import Logger from "../../utils/logger.js";

const {log} = new Logger('app:api:middleware:handlers:500', "Error 500 - Middleware");

const handler500 = async (err, req, res, next) => {
    if(!err)
        return next();

    const exceptionHandler = new ExceptionHandler(log, null, res, {err});


    res.locals = {
        message: err.message,
        error: req.app.get('env') === 'development' ? err : {}
    }

    return exceptionHandler.execute("SYS_001");
}

export default handler500;
