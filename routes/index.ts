import express, { Router } from "express";
import { homeController } from "../controller/home";

const router: Router = express.Router();

// Routes for Home page
router.get("/", homeController );

router.post('/create-room', );
router.post('/join-room');
router.post('/leave-room');

export default router;
