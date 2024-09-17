import { Request, Response } from 'express';

export const homeController = (req: Request, res: Response) => {
    res.send('Welcome to the home page!');
};