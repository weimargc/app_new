import {ExceptionHandler} from "../../utils/api.js";
import Logger from "../../utils/logger.js";
import {checkToken} from "../../utils/security.js";
const {log} = new Logger('app:api:middleware:auth:verifyToken', "Verify Token - Middleware");


const verifyToken = async (req, res, next) => {
    const bearerHeader = req.headers?.authorization;
    const exceptionHandler = new ExceptionHandler(log, null, res, {bearerHeader});

    if(typeof bearerHeader === 'undefined') {
        return exceptionHandler.execute("AH_003");
    }

    try {
        const bearerToken = bearerHeader.split(" ")[1];
        const decoded = await checkToken(bearerToken);
        req.token = bearerToken;
        req.user = decoded;
        next();
    } catch (error) {
        return exceptionHandler.execute("AH_003");
    }
}

export default verifyToken;
