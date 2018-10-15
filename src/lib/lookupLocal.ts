// Using ES6 strict mode (not 100% needed, but ensure that the compiled JS is in strict mode)
'use strict';

// Node/NPM and local dependencies

const dns = require('dns');

export function test() {
    dns.lookup('192.168.2.23', (err, address, family) => {
        console.log('address: %j family: IPv%s', address, family);
    });
}
