#!/bin/bash
IMAGE_PREFIX=${1:-$DOCKERHUB_USERNAME}
if [ -z "$IMAGE_PREFIX" ]; then echo "Provide DOCKERHUB username or set DOCKERHUB_USERNAME"; exit 1; fi
docker build -t $IMAGE_PREFIX/suq-alfalah-backend:latest ./backend
docker build -t $IMAGE_PREFIX/suq-alfalah-frontend:latest ./frontend
docker push $IMAGE_PREFIX/suq-alfalah-backend:latest
docker push $IMAGE_PREFIX/suq-alfalah-frontend:latest
