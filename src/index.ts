// Using ES6 strict mode (not 100% needed, but ensure that the compiled JS is in strict mode)
'use strict';

// Node/NPM dependencies
import commander from 'commander';

// Main entry point, call all modules


// Get the CLI arguments and call the proper module
commander.version('0.0.1', '-v, --version');

commander.parse(process.argv);


console.log(commander.args)

