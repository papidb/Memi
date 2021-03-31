import { Router } from 'express';
// import middlewares from '../middlewares';
const route = Router();

export default app => {
  app.use('/posts', route);

  route.get('/', (req, res) => {
    return res.json({ posts: [{ name: 'omo' }] }).status(200);
  });
};
