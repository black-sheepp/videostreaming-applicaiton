import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import indexRouter from "./routes/index";
import "./config/dbConnection";

import cors from "cors";

dotenv.config();

const app: Application = express();
const PORT: string | number = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", indexRouter);

// Error handling middleware 
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.error(err.stack);
	res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
