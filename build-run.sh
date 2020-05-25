#!/bin/bash
tsc -p tsconfig.json && ./pngpaste tmp.png | node main && rm -f tmp.png
