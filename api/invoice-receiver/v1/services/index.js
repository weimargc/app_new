import pqmService from "./pqm/service.js";

const loadServices = async () => {
    await Promise.all([
        pqmService.load(),
    ]);
};
export default loadServices;
