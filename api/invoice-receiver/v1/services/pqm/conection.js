
export class PendingQueryManagerConnection {
    constructor({host}) {

    }

    async findPendingQuery(queryId) {
        return {
            queryId: queryId,
            status: "pending",
        }
    }

}
