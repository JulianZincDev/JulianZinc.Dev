#!/bin/bash

./build_prod.sh

rsync -av --exclude-from='.copy-exclude' ./portfolio-prod root@209.38.85.30:/root/
