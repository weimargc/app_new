import loginServices from "../api/login/services/index.js";
import invoiceReceiverServices from "../api/invoice-receiver/v1/services/index.js";

import Logger from "../utils/logger.js";

const {log} = new Logger('app:services', "Global Services");

const loadServices = async () => {
    await Promise.all([
        loginServices(),
        invoiceReceiverServices()
    ]);
};

export default log(loadServices, {
    success: "Services loaded successfully"
});
