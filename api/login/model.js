import {R} from "use-model-validation";
import {findException} from "../../utils/api.js";
import {model} from "../../utils/model.js";

export const credentialModel = model({
    username: [R.required(findException("AH_002", ["username"]))],
    password: [R.required(findException("AH_002", ["password"]))],
})
