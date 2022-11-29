
const endpoint = "/api/message/"

class AmqClient {
    constructor({url, username, password, queue}) {
        this.url = url + endpoint + queue;
        this.headers = {
            authorization: `Basic ${btoa(`${username}:${password}`)}`,
        }
    }

    async send(message) {
        return await fetch(`${this.url}?type=queue`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(message),
        });
    }
}

export default AmqClient;
