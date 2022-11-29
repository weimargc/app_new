import config from "config";
import jwt from "jsonwebtoken";
import sha256 from "sha256";

const {secret, expiration} = config.get("auth");

export const buildToken = async (username) =>{
    return await jwt.sign({username}, secret, {expiresIn: expiration, algorithm: "HS256",});
}

export const checkToken = async (token) => {
    return jwt.verify(token, secret);
}

export const toSHA256 = (string) => {
    return sha256(string);
}
