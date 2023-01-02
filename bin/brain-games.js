#!/usr/bin/env node
import whatIsYourName from '../src/cli.js';

const name = whatIsYourName();
console.log(`Hello, ${name}!`);