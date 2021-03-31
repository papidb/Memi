import { Router } from 'express';
import post from './routes/post';

// guaranteed to get dependencies
export default () => {
  const app = Router();
  post(app);

  return app;
};
