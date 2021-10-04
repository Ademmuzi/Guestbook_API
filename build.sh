#!/bin/bash
set -e

if [ "$#" -lt 2 ]; then
    echo -e\
    "usage info\n\
    build <tagname> <registry>\n\
    example: build latest ssc4033.azurecr.io"
    exit 1
else 
    TAG="$1"
    REGISTRY="$2"
fi

# 1. Container bauen
docker build -t amu3100:$TAG .

# 2. Container taggen
docker tag amu3100:$TAG $REGISTRY/amu3100:latest
docker tag amu3100:$TAG $REGISTRY/amu3100:$TAG

# 3. Container pushen
docker push $REGISTRY/amu3100:latest
docker push $REGISTRY/amu3100:$TAG
