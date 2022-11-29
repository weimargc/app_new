import config from 'config';

const errors = config.get('errors');

const defaultError = errors.find(x => x.code === "NOTFOUND");

export const findException = (code, placeholders = []) => {
    const error = errors.find(x => x.code === code) || defaultError;
    const errorMessage = error.message.replace(/{(\d+)}/g, (match, number) => placeholders[number] || match);
    return {
        error: {code: error.code, message: errorMessage},
        status: error.status
    };
}

export const response = (res, obj, code = 200) => {
    if (res.headersSent)
        return;
    return res.status(code).json(obj);
}

export class ExceptionHandler {
    constructor(logger, prefix, res, payload) {
        this.logger = logger;
        this.res = res;
        this.payload = payload;
        this.execute = this.logger(this.#execute.bind(this), {
            success: ({status, error}) => `${(prefix ? `[${prefix}] ` : ``)}A new ${(error.code === "NOTFOUND" ? "un-" : "")}controlled exception was detected in the process: '${error.message}' with code '${error.code}' and respose with status [${status}] ${(this.payload) ? `and payload: ${JSON.stringify(this.payload)}` : ''}`,
        });
    }

    #execute(data, payload) {
        let exception;
        if (typeof data === 'string') {
            exception = findException(data, payload);
        } else {
            exception = data.message ? data : data[Object.keys(data)[0]];
            while(exception instanceof Array) {
                exception = exception[0];
            }
        }
        const {status, error} = exception;
        response(this.res, error, status);
        return exception;
    }
}
