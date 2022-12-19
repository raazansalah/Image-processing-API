import express from 'express';
import routes from './routes/index';
//initialize app & port
const app = express();
const port = 5000;

app.use('/api', routes);
//start express server

app.listen(port, (): void => {
  console.log('server started');
});

export default app;
