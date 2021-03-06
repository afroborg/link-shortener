import { Request, Response, Router } from 'express';
import { deleteLink, getLink, newLink } from '../services/mongodb-service';
const app = Router();

app.get('/:shortLink', (req: Request, res: Response): void => {
  const shortLink = req.params.shortLink;
  getLink(shortLink)
    .then((originalString: string) => res.redirect(originalString))
    .catch((_err: any) => res.redirect('/'));
});

app.post('/new', (req: Request, res: Response) => {
  newLink(req.body.link)
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err));
});

app.delete('/:id', (req: Request, res: Response): void => {
  const id = req.params.id;
  deleteLink(id)
    .then(() => res.status(200).send())
    .catch(err => res.status(500).send(err));
});

export default app;
