import express from "express";
import {authentication} from "./controller.js";

const router = express.Router();

router.get('/authentication', authentication);

export default router;
