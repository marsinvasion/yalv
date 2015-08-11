#!/bin/bash

fileName=$1
if [ -z "$fileName" ]; then
  fileName=app.log
fi
str=$2
if [ -z "$str" ]; then
  str=pid
fi
echo "tailing $fileName searching for $str"
tail -f $fileName |
  while read line; do
    if [[ $line == *$str* ]]; then
      echo -n "$line" > /dev/udp/localhost/5201
    fi
  done
