import { Request, Response, Router } from 'express';
import { getAllLinks } from '../services/mongodb-service';
const app = Router();

app.get('/admin/info', (_req: Request, res: Response): void => {
  getAllLinks()
    .then((allLinks: any[]) => res.json(allLinks))
    .catch((_err: any) => res.redirect('/'));
});

export default app;
