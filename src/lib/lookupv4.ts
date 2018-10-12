// Using ES6 strict mode (not 100% needed, but ensure that the compiled JS is in strict mode)
'use strict';

// Node/NPM and local dependencies
import request from 'request';
import { ipInfo } from './interfaces'
import { isIPv4 } from 'net';

// Base URL for IP address lookups
const baseURL = 'https://ipapi.co/';


// TODO: have this only return the JSON to be cleaned/logged
export function v4Lookup(address: string) {
    if (isIPv4(address)) {
        request.get(`${baseURL}${address}/json`, (err, res, body) => {
            if (err) {
                return console.log(`${err}`);
            }

            // Make sure thhe response is JSON before making it pretty
            if (checkIfJSON(body)) {
                // Parse the JSON
                let parsedIPInfo: ipInfo = JSON.parse(body);

                console.log('\nReturned Information:\n');

                // For each Property, neatly print it out
                for (let key in parsedIPInfo) {
                    console.log(`${key}: ${parsedIPInfo[key]}`);
                }
            } else {
                console.log('Something went wrong: Could not parese JSON response from IPV4 lookup');
            }
        });

    } else {
        console.log(`${address} is not a valid IPV4 address`);
        return process.exit(0);
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