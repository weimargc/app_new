import express from "express";
import authRoutes from "../api/login/routes.js";
import invoiceRoutes from "../api/invoice-receiver/routes.js";
import verifyToken from "../middlewares/auth/verifyToken.js";

const router = express.Router();

router.use('/login', authRoutes);
router.use('/invoice-receiver', verifyToken, invoiceRoutes);

export default router;
