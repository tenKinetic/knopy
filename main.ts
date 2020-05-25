import clipboardy = require('clipboardy')
import Tesseract = require('tesseract.js')
import fs = require('fs')
import path = require('path')
import { argv } from 'process';

const image = path.resolve('./tmp.png')

Tesseract.recognize(
  image,
  'eng'
).then(({ data: { text } }) => {
  clipboardy.write(text)
  console.log('\x1b[36m%s\x1b[32m', 'The system clipboard now contains:')
  console.log('\x1b[0m', text)
}).catch(error => console.error(error))
