// Using ES6 strict mode (not 100% needed, but ensure that the compiled JS is in strict mode)
'use strict';

// Node/NPM and local dependencies
import request from 'request';
import { ipInfo } from './interfaces'
import { isIPv4 } from 'net';

// Base URL for IP address lookups
const baseURL = 'https://ipapi.co/';


export function v4Lookup(address: string) {
    if (isIPv4(address)) {
        request.get(`${baseURL}${address}/json`, (err, res, body) => {
            if (err) {
                // This really shouldn't happen, but log anyway
                return console.log(`Something went wrong: ${err}`);
            }

            // Make sure thhe response is JSON before making it pretty
            if (checkIfJSON(body)) {
                // Parse the JSON
                let parsedIPInfo: ipInfo = JSON.parse(body);

                // Print out the results
                printLookupInfo(parsedIPInfo);
            } else {
                console.log('Something went wrong: Could not parese JSON response from IPV4 lookup');
            }
        });
    } else {
        console.log(`${address} is not a valid IPV4 address`);
        return process.exit(0);
    }
}

function printLookupInfo(lookupInfo: ipInfo) {
    console.log('\nReturned Information:\n');

    // For each Property, neatly print it out
    for (let key in lookupInfo) {
        console.log(`${key}: ${lookupInfo[key]}`);
    }
}

function checkIfJSON(jsonString: string): boolean {
    try {
        JSON.parse(jsonString);
        return true;
    } catch (e) {
        return false;
    }
}