#!/bin/bash

fileName=$1
if [ -z "$fileName" ]; then
  fileName=app.log
fi
str=$2
if [ -z "$str" ]; then
  str=pid
fi
udpPort=$3
if [ -z "$udpPort" ]; then
  udpPort=5201
fi
echo "tailing $fileName searching for $str"
tail -f --retry $fileName 2>/dev/null |
  while read line; do
    if [[ $line == *$str* ]]; then
      echo -n "$line" > /dev/udp/localhost/$udpPort
    fi
  done
