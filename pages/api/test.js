import myMiddleware from '../../src/middleware.js'
import nc from 'next-connect';
//import next from 'next';
const passport = require('passport');
const BearerStrategy = require('passport-azure-ad').BearerStrategy;



// async function runMiddleware(req, res, fn) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result) => {
//       if (result instanceof Error) {
//         return reject(result)
//       }
//       return resolve(result)
//     })
//   })
// }

let config = {
  "credentials": {
    "tenantID": "0fafa",
    "clientID": "dummy",
    "audience": "vsa"
  },
  "resource": {
    "scope": [".default"]
  },
  "metadata": {
    "authority": "login.microsoftonline.com",
    "discovery": ".well-known/openid-configuration",
    "version": "v2.0"
  },
  "settings": {
    "validateIssuer": true,
    "passReqToCallback": false,
    "loggingLevel": "info",
    "isB2C": false
  }
}


const options = {
  identityMetadata: `https://${config.metadata.authority}/${config.credentials.tenantID}/${config.metadata.version}/${config.metadata.discovery}`,
  issuer: `https://${config.metadata.authority}/${config.credentials.tenantID}/${config.metadata.version}`,
  clientID: config.credentials.clientID,
  audience: config.credentials.audience,
  validateIssuer: config.settings.validateIssuer,
  passReqToCallback: config.settings.passReqToCallback,
  //loggingLevel: config.settings.loggingLevel, // not specifying loglevel means it is turned off
  isB2C: config.settings.isB2C,
  //,scope: config.resource.scope
  //,    proxy: { port: 'proxyport', host: 'proxyhost', protocol: 'http' },
};

const bearerStrategy = new BearerStrategy(options, (token, done) => {
  done(null, {}, token);
}
);


const authenticate = async (req, res) =>
  new Promise((resolve, reject) => {
    passport.authenticate('oauth-bearer', { session: false }, (error, token) => {
      if (error) {
        reject(error)
      } else {
        resolve(token)
      }
    })(req, res)
  })

passport.use(bearerStrategy);

const handler = nc()

handler
  .use(passport.initialize())
  .get(async (req, res, next) => {
    try {
      const result = await authenticate(req, res)
      //console.log(result)
      if (result == false) {
        res.status(401).send("Access denied")
      }
      else { next() }
      //res.status(200).send({ done: true })

    } catch (error) {
      console.error(error)
      res.status(500).send(error.message)
    }
  })
export default handler;



// const handler = nc()
// //const handler = nextConnect({ myMiddleware })
// handler
//   .use((req, res, next) => {
//     console.log("mi a fasz")
//     next();
//   })
//   // .use(myMiddleware)
//   .get((req, res) => {
//     res.send("Hello world");
//   })
// export default handler;

// function handler2(req, res) {

//   //runMiddleware(req, res, myMiddleware);
//   //.then(() => console.log("valami"));

//   let data = {
//     "products": [
//       { "id": "p1", "title": "Product 1" },
//       { "id": "p2", "title": "Product 2" },
//       { "id": "p3", "title": "Product 3" }
//     ]
//   }

//   if (req.method === 'GET') {

//     res.status(200).send(data)
//   }
//}

//export default handler;