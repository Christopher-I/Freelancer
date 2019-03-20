const routes = require('next-routes')();

routes.add('/contracts/about', '/about');
routes.add('/contracts/new', '/contracts/new');
routes.add('/contracts/:address', '/contracts/view');
routes.add('/contracts/:address/bid', '/contracts/bid');
routes.add('/contracts/:address/submission', '/contracts/submission');


module.exports = routes;
