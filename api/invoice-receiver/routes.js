import express from "express";
import routerV1 from "./v1/routes.js";

const router = express.Router();

router.use("/v1", routerV1)

export default router;
