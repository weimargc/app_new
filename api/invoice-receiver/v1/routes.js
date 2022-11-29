import express from "express";
import {createQuery} from "./controller.js";

const router = express.Router();

router.post('/', createQuery);

export default router;
