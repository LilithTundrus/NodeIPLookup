// Using ES6 strict mode (not 100% needed, but ensure that the compiled JS is in strict mode)
'use strict';

// Node/NPM and local dependencies
import request from 'request';
import { ipInfo } from './interfaces'

// Base URL for IP address lookups
const baseURL = 'https://ipapi.co/';



export function v4Lookup(address: string) {
    if (checkIfIPAddressIsValid(address)) {
        request.get(`${baseURL}${address}/json`, (err, res, body) => {
            if (err) {
                return console.log(`${err}`);
            }

            if (checkIfJSON(body)) {
                // Parse the JSON
                let parsedIPInfo: ipInfo = JSON.parse(body);
                console.log(parsedIPInfo.ip)

                // For each Property, neatly print it out
            }

            // Make sure thhe response is JSON before making it pretty
            console.log(body);
        });

    } else {
        console.log(`${address} is not a valid IPV4 address`);
        return process.exit(0);
    }
}

// TODO: use isIPv4 function instead
function checkIfIPAddressIsValid(address: string): boolean {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(address)) {
        return true;
    }
    return false;
}

function checkIfJSON(jsonString: string): boolean {
    try {
        JSON.parse(jsonString);
        return true;
    } catch (e) {
        return false;
    }
}