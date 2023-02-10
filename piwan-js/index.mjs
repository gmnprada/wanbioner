import express from 'express';
import hbs from 'hbs';
import { RouteIndex } from './routes/index.mjs';
const app = express();
const port = 36980;

app.set('view engine','html');

app.engine('html',hbs.__express);

app.get('/', RouteIndex);

app.listen(port, () => {
  console.log(`Hi PIWAN Web Server listening on port ${36980} That Working Exhausting Bandwith to trade into PI for you`);
})