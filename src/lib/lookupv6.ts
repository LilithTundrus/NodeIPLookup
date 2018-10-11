// Using ES6 strict mode (not 100% needed, but ensure that the compiled JS is in strict mode)
'use strict';

// Node/NPM and local dependencies
import request from 'request';
import { ipInfo } from './interfaces'

// Base URL for IP address lookups
const baseURL = 'https://ipapi.co/';




function checkIfJSON(jsonString: string): boolean {
    try {
        JSON.parse(jsonString);
        return true;
    } catch (e) {
        return false;
    }
}