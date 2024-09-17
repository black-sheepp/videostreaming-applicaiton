import express, { Router } from "express";
import { homeController } from "../controller/home";

const router: Router = express.Router();

// Routes for Home page
router.get("/", homeController );

export default router;
