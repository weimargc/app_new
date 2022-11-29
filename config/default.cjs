const errors = require('./errors.json');

module.exports = {
    errors: errors,
    timer: {
        interval: 1000,
        timeout: 15000,
    },
    auth: {
        expiration: "6h",
        secret: "H5c6#7eJCb?MoQapxEbGhKCpi",
    },
    documanager: {
        host: "endpoint",
        endpoint: {
            send_document: "anyhost.com",
        }
    },
    pending_query_manager: {
        host: "pendingHost",
        endpoint: {
            get: "",
            post: "",
            put: "",
            delete: "",
        }
    },
    amq: {
        url: "http://10.10.10.10:8161",
        username: "admin",
        password: "admin",
        queue: "feco.postoffice-queue",
    },
}
