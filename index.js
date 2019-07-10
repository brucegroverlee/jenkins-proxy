/**
 * https://itnext.io/google-cloud-functions-node-js-and-express-aea4a2a9ba3a
 */

const proxy = require('express-http-proxy');
const app = require('express')();

/**
 * Could trigger with Pull request and filter it  only the closed
 * https://www.npmjs.com/package/express-http-proxy#filter-supports-promises
 * Example:
 * 
app.use('/proxy', proxy('www.google.com', {
  filter: function(req, res) {
     return req.method == 'GET';
  }
}));

 */
app.use('/', proxy(process.env.JENKINS_SERVER_URL));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

module.exports = {
  jenkinsProxy: app,
};