#!/bin/bash

cd $(dirname "$0")

set -e errexit
set -o pipefail
set -a
. ".docker-env"
set +a
docker-compose up -d