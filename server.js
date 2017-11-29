const requestProxy = require('express-request-proxy');
const express = require('express')
const app = express()

app.all('/*', requestProxy({
  url: process.env.server + '/*',
  headers: {
		Authorization: process.env.authorization 
	}
}));
app.listen(
  process.env.port, 
  () => console.log('Proxy server listening on port ' + process.env.port + '. Redirecting traffic to ' + process.env.server)
)
