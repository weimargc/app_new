
module.exports = {
    amq: {
        username: "",
        password: "",
        host: "",
        port: 61614,
        queue: "",
    },
    auth:{
        db: {
            host: "rds-aurora-quality.cfclcsq5vazq.us-east-1.rds.amazonaws.com",
            port: 5432,
            username: "develop",
            password: "c18Ar*d20Es",
            database: "auroradevelop",
            table: "usuarios",
            scheme: "invoice",
        },
    },
    documanager: {
        host: "",
        endpoint: {
            send_document: "",
        }
    },
    pending_query_manager: {
        host: "",
        endpoint: {
            get: "",
            post: "",
            put: "",
            delete: "",
        }
    },
}
