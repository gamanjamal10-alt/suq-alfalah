#!/bin/bash
REMOTE=$1
USER=${2:-root}
if [ -z "$REMOTE" ]; then echo "Usage: deploy-remote.sh <host> [user]"; exit 1; fi
ssh $USER@$REMOTE 'cd /opt/suq-alfalah && docker compose pull && docker compose up -d --remove-orphans'
