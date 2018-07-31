#!/bin/bash

if [ -z "$1" ]; then
	CONSOLE_CONTAINER="server"
else
	CONSOLE_CONTAINER=$1
fi


cd $(dirname "$0")

set -e errexit
set -o pipefail
set -a
. ".docker-env"
set +a

docker exec -it ${CONSOLE_CONTAINER} bash