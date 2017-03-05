#!/bin/bash

# Build content and static files
npm run build
npm run html

# Replace placeholder with rendered html
node ./utils/html
rm build/js/html.js

# Commit and push
git add .
git commit -m "Update"
git push

# Deploy on GitHub Pages
git subtree push --prefix build origin gh-pages
