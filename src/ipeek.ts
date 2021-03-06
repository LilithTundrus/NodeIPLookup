#!/usr/bin/env node
// The above line tells OS that this is NOT a shell script, and needs a specific interpreter

// Using ES6 strict mode (not 100% needed, but ensure that the compiled JS is in strict mode)
'use strict';

// Node/NPM dependencies
import commander from 'commander';
import { v4Lookup } from './lib/lookupv4';
import { v6Lookup } from './lib/lookupv6';
import { lookupAny } from './lib/lookupAny';
// Main entry point, call all modules


// This script/CLI tool is designed to take an ipv6 or v4 address and retrieve information about it
// (but not anything special like is it a real IP address vs. a fake one)

// Get the CLI arguments and call the proper module
commander.version('0.0.1', '-v, --version')
    .option('--v4 <IP Address>', 'Get location data for a given IPV4 Address')
    .option('--v6 <IP Address>', 'Get location data for a given IPV6 Address')
    .option('--dns <IP Address>', 'Look up an IP address using DNS services');

// Parse the CLI arguments given (using commander)
commander.parse(process.argv);

if (commander.v4) {
    // Call the v4 module and pass control to it
    v4Lookup(commander.v4);
} else if (commander.v6) {
    // Call the v6 module and pass control to it
    v6Lookup(commander.v6);
} else if (commander.dns) {
    // Call the DNS module and pass control to it
    lookupAny(commander.dns);
} else {
    commander.help();
}