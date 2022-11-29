import {R} from "use-model-validation";
import {model, nested} from "../../../utils/model.js";
import {findException} from "../../../utils/api.js";

const c = (ref, required, type, length) => {
    const rules = [];

    if (required) {
        rules.push(R.required(findException(required, [ref])));
    }

    if (type) {
        rules.push(R.test(x => typeof x[ref] === type, findException("IR_009", [ref, type])))
    }

    if (length && length > 0) {
        rules.push(R.test(x => x[ref].toString().length <= length, findException("IR_010", [ref, length])));
    }

    return rules;
}

export const invoiceModel = model({
    UploadRequest: nested("UploadRequest", {
        ClientId: c("ClientId", "IR_004", "string"),
        AccountId: c("AccountId", "IR_005", "string"),
        Invoice: nested("Invoice", {
            ENC: nested("ENC", {
                ENC_1: c("ENC_1", "IR_005", "string", 6),
                ENC_2: c("ENC_2", "IR_005", "number", 35),
                ENC_3: c("ENC_3", "IR_005", "number", 35),
                ENC_4: c("ENC_4", "IR_005", "string", 8),
                ENC_5: c("ENC_5", "IR_005", "string", 55),
                ENC_6: c("ENC_6", "IR_005", "number", 20),
                ENC_7: c("ENC_7", "IR_005", "string", 10),
                ENC_8: c("ENC_8", "IR_005", "string", 14),
                ENC_9: c("ENC_9", "IR_005", "number", 2),
                ENC_10: c("ENC_10", "IR_005", "string", 3),
                ENC_11: c("ENC_11", null, "number", 25),
                ENC_12: c("ENC_12", null, "number", 25),
                ENC_13: c("ENC_13", null, "number", 70),
                ENC_14: c("ENC_14", null, "number", 100),
                ENC_15: c("ENC_15", "IR_005", "number", 6),
                ENC_16: c("ENC_16", null, "string", 10),
                ENC_17: c("ENC_17", "IR_005", "number", 2048), //dependiente?
                ENC_18: c("ENC_18", "IR_005", "number", 2048), //dependiente?
                ENC_19: c("ENC_19", "IR_005", "number", 100), //dependiente?
                ENC_20: c("ENC_20", "IR_005", "number", 1),
                ENC_21: c("ENC_21", "IR_005", "number", 12),
                ENC_22: c("ENC_22", "IR_005", "number", 15),//dependiente?
            }),
        })
    }),
})

export const amqModel = model({
    file_name: c("file_name", "IR_005", "string"),
    file_size: c("file_size", "IR_005", "number"),
    account_type: c("account_type", "IR_005", "string"),
    reception_date: c("reception_date", "IR_005", "object"),
    automatic: c("automatic", "IR_005", "boolean"),
    transaction_id: c("transaction_id", "IR_005", "string"),
    company_id: c("company_id", "IR_005", "string"),
    account_id: c("account_id", "IR_005", "string"),
    country: c("country", "IR_005", "string"),
    document_storage_id: c("document_storage_id", "IR_005", "string"),
    channel: c("channel", "IR_005", "string"),
})
