/**
 * Koa 2 TypeScript Boilerplate
 *
 * 2016 Ændrew Rininsland
 */

// Save your local vars in .env for testing. DO NOT VERSION CONTROL `.env`!.
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') require('dotenv').config();

import * as Koa from 'koa';
import * as chalk from 'chalk';
import { logger } from './configs';
import { router } from './routes';
import {middleware} from './middlewares';


const app = new Koa();
const port = process.env.PORT || 5555;
app.use(middleware())
   .use(router().routes())
   .use(router().allowedMethods());
app.listen(port, () => {
  console.log(chalk.black.bgGreen.bold(`Listening on port ${port}`))
});

export default app;
