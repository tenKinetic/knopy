"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clipboardy = require("clipboardy");
const Tesseract = require("tesseract.js");
const path = require("path");
const image = path.resolve('./tmp.png');
Tesseract.recognize(image, 'eng').then(({ data: { text } }) => {
    clipboardy.write(text);
    console.log('\x1b[36m%s\x1b[32m', 'The system clipboard now contains:');
    console.log('\x1b[0m', text);
}).catch(error => console.error(error));
