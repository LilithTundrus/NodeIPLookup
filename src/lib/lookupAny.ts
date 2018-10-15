// Using ES6 strict mode (not 100% needed, but ensure that the compiled JS is in strict mode)
'use strict';

// Node/NPM and local dependencies

const dns = require('dns');


export function lookupAny(address: string) {
    // Use the built-in node.js DNS service to attempt to lookup the address
    dns.resolve(address, function (err, addresses) {
        if (err) throw err;

        console.log(`\nAddresses: ${addresses}`);

        addresses.forEach((addr) => {
            dns.reverse(addr, (err, domains) => {
                if (err) {
                    console.log(`\nReverse lookup for ${addr} failed: ${err.message}`);
                } else {
                    console.log(`\nReverse lookup for ${addr}: \n${JSON.stringify(domains)}`);
                }
            });
        });
    });
}