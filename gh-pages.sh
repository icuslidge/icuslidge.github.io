#!/bin/bash

set -e # Terminate this script as soon as any command fails

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

mkdir -p snapshot
rm -r snapshot

git branch -D gh-pages || true
git checkout -b gh-pages

./snapshot.js

cp -r snapshot/* .

git add .
git commit -m 'gh-pages'

echo "Build successful."
