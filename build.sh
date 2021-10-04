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
docker build -t adem:$TAG .

# 2. Container taggen
docker tag adem:$TAG $REGISTRY/ssc-adem:latest
docker tag adem:$TAG $REGISTRY/ssc-adem:$TAG

# 3. Container pushen
docker push $REGISTRY/ssc-adem:latest
docker push $REGISTRY/ssc-adem:$TAG
