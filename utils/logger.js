import debug from "debug";


class Logger {
    constructor(name, prefix) {
        this.logger = debug(name);
        this.prefix = prefix ? "[" + prefix + "] " : "";
    }

    #getMessage = (message, ...args) => {
        return message  ? (typeof message === "string" ? message : message(...args)) : "";
    }

    log = (fn, {start, success}= {}) => {
        if (fn.constructor.name === 'AsyncFunction') {
            return async (...args) => {
                this.write(this.#getMessage(start, ...args));
                const result = await fn(...args);
                args.unshift(result);
                this.write(this.#getMessage(success, ...args));
                return result;
            }
        } else if (fn.constructor.name === 'Function') {
            return (...args) => {
                this.write(this.#getMessage(start, ...args));
                const result = fn(...args);
                args.unshift(result);
                this.write(this.#getMessage(success, ...args,));
                return result;
            }
        } else if (fn.constructor.name === 'String') {
            this.write(this.#getMessage(fn));
        }
    }

    write = (message) => {
        if(!message || message === "") return;
        this.logger(this.prefix + message);
    }

}

export default Logger;
