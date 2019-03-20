'use strict';

var routes = require('next-routes')();

routes.add('/contracts/about', '/about');
routes.add('/contracts/new', '/contracts/new');
routes.add('/contracts/:address', '/contracts/view');
routes.add('/contracts/:address/bid', '/contracts/bid');
routes.add('/contracts/:address/submission', '/contracts/submission');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUFPLEFBQVAsSUFBVyxBQUFYLG9CQUErQixBQUEvQjtBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgsa0JBQTZCLEFBQTdCO0FBQ0EsT0FBTyxBQUFQLElBQVcsQUFBWCx1QkFBa0MsQUFBbEM7QUFDQSxPQUFPLEFBQVAsSUFBVyxBQUFYLDJCQUFzQyxBQUF0QztBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgsa0NBQTZDLEFBQTdDOztBQUdBLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiQzovV2luZG93cy5vbGQuMDAwL1VzZXJzL2NocmlzdG9waGVySWdib2pla3dlL0ZyZWVsYW5jZXIifQ==