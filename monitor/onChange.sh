#!/bin/bash

F=$1
echo $F
P="$*"

while S=$(inotifywait -eMODIFY $F 2>/dev/null)
do
  printf "At %s: \n" "$(date)"
  $P
done
