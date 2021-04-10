import myMiddleware from '../../src/middleware.js'
import nc from 'next-connect';
import handler from './test.js'
import next from 'next';

//const handler = nc()
//const handler = nextConnect({ myMiddleware })
handler
  .use((req, res, next) => {
    console.log("This is a middleware")
    next();
  })
  // .use(myMiddleware)
  .get((req, res) => {
    res.send("Hello world");
  })
export default handler;