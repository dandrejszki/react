

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
