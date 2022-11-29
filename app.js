import express, {json, urlencoded} from 'express';
import handler404 from "./middlewares/handlers/handler404.js";
import handler500 from "./middlewares/handlers/handler500.js";
import timeout from "./middlewares/rules/timeout.js";
import routes from './routes/index.js';
import loadServices from "./services/index.js";

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(timeout);
app.use(routes);
app.use(handler500);
app.use(handler404);

const setupApp = async () => {
    await loadServices();
    return app;
}

export default setupApp;
