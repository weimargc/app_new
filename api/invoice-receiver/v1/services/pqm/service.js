import config from "config";
import Logger from "../../../../../utils/logger.js";
import {PendingQueryManagerConnection} from "./conection.js";
const {log} = new Logger('app:api:invoice-receiver:v1:services:pending-query-manager', "Pending Query Manager");

const connection = new PendingQueryManagerConnection(config.get("pending_query_manager"));
const pendingQueries = {};

const checkPendingQueries = async () => {
    const currentPendingQueries = Object.keys(pendingQueries);
    for(const queryId of currentPendingQueries) {
        const response = await this.connection.findPendingQuery(queryId);
        if (response.status !== "ready") {
            continue;
        }
        await pendingQueries[queryId](response);
    }
}

const addPendingQuery = (id, callback) => {
    return pendingQueries[id] = callback;
}

const load = () => {
    setInterval(checkPendingQueries, config.get("timer.interval"));
};

export default {
    load: log(load, {
        success: "Pending Query Manager loaded"
    }),
    addPendingQuery: log(addPendingQuery, {
        start: "Adding pending query",
        success: "Pending query added"
    }),
    checkPendingQueries: log(checkPendingQueries, {
        start: "Checking pending queries...",
        success: "Pending queries checked"
    }),
}
