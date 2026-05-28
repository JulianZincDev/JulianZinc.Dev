#!/bin/bash

DEST=portfolio-prod

cd "${dirname "$0"}"

rm -rf "$DEST"
mkdir "$DEST"

rsync -av --exclude "$DEST" ./ ./"$DEST"/
