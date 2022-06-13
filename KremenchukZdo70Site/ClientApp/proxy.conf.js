const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:5709';

const PROXY_CONFIG = {
  "/api/*": {
    "target": target,
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": true
  }
}

module.exports = PROXY_CONFIG;
