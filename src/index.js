const urllib = require('urllib');

urllib.request('http://nodejs.org').then(function (result) {
  console.log('status: %s, body size: %d, headers: %j', result.res.statusCode, result.data.length, result.res.headers);
});
