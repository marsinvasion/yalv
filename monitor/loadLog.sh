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
echo "loading $fileName searching for $str"
while read -r line || [[ -n "$line" ]]; do
  if [[ $line == *$str* ]]; then
      echo -n "$line" | nc -w1 -u 127.0.0.1 $udpPort
  fi
done < "$fileName"
