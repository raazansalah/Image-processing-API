import express from 'express';
import images from './api/images';

const routes = express.Router();
//define a route
routes.get('/', (req, res) => {
  res.send('main api route');
  res.status(200);
});

//use routes

routes.use('/images', images);

export default routes;
