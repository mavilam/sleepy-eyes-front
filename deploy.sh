#!/usr/bin/env sh

# abort on errors
set -e

npm run build

cd dist


git init
git add -A
git commit -m 'deploy to GH pages'

git push -f git@github.com:mavilam/sleepy-eyes-front.git main:gh-pages

cd -