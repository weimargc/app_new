import config from "config";
import Logger from "../../../../utils/logger.js";
import {buildToken, toSHA256} from "../../../../utils/security.js";
import Database from "./database.js";
const {log} = new Logger('app:api:login:services:auth', "Auth Service");
import obfuscatorEmail from "obfuscator-email";

const database = new Database(config.get("auth.db"));
const {user} = database.models;

const checkCredentials = async (username, password) => {
    return Boolean(await user.findOne({where: {username, password: toSHA256(password)}}));
};

const generateToken = async (username) => {
    return await buildToken(username);
};

const load = async () => {
    await database.connect();
};

export default {
    load: log(load, {
        success: "Succesfuly connected to database"
    }),
    checkCredentials: log(checkCredentials, {
        start: (username) => `Checking credentials for user ${obfuscatorEmail(username)}`,
        success: (result, username) => `Credentials for user ${obfuscatorEmail(username)} are ${result ? "correct" : "incorrect"}`
    }),
    generateToken: log(generateToken, {
        start: (username) => `Generating token for user ${obfuscatorEmail(username)} - Expiration: ${config.get("auth.expiration")}`,
        success: (_, username) => `Token for user ${obfuscatorEmail(username)} generated successfully.`
    }),
}
