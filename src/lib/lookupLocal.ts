// Using ES6 strict mode (not 100% needed, but ensure that the compiled JS is in strict mode)
'use strict';

// Node/NPM and local dependencies

const dns = require('dns');


export function test() {
 
    dns.resolve4('192.168.2.23', function (err, addresses) {
      if (err) throw err;
     
      console.log('addresses: ' + JSON.stringify(addresses));
     
      addresses.forEach(function (a) {
        dns.reverse(a, function (err, domains) {
          if (err) {
            console.log('reverse for ' + a + ' failed: ' +
              err.message);
          } else {
            console.log('reverse for ' + a + ': ' +
              JSON.stringify(domains));
          }
        });
      });
    });
}
