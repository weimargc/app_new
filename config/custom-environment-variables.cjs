module.exports ={
    amq: {
        username: "AMQ_USERNAME",
        password: "AMQ_PASSWORD",
        host: "AMQ_HOST",
        port: {
            "__name": "AMQ_PORT",
            "__format": "number"
        },
        queue: "AMQ_QUEUE_TO_POSTOFFICE",
    },
    auth:{
        db: {
            host: "AUTH_DB_HOST",
            port: {
                "__name": "AUTH_DB_PORT",
                "__format": "number"
            },
            username: "AUTH_DB_USERNAME",
            password: "AUTH_DB_PASSWORD",
            database: "AUTH_DB_DATABASE",
            table: "AUTH_DB_TABLE",
            scheme: "AUTH_DB_SCHEME",
        },
        secret: "AUTH_SECRET",
        expiration: "AUTH_EXPIRATION"
    },
    documanager: {
        host: "DOCUMANAGER_HOST",
        endpoint: {
            send_document: "DOCUMANAGER_ENDPOINT_SEND_DOCUMENT",
        }
    },
    pending_query_manager: {
        host: "PENDING_QUERY_MANAGER_HOST",
        endpoint: {
            get: "PENDING_QUERY_MANAGER_ENDPOINT_GET",
            post: "PENDING_QUERY_MANAGER_ENDPOINT_POST",
            put: "PENDING_QUERY_MANAGER_ENDPOINT_PUT",
            delete: "PENDING_QUERY_MANAGER_ENDPOINT_DELETE",
        }
    },
}
