import authService from "./auth/service.js";

const loadServices = async () => {
    await Promise.all([
        authService.load(),
    ]);
};

export default loadServices;
