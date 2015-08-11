#!/bin/bash

fileName=$1
if [ -z "$fileName" ]; then
  fileName=app.log
fi
str=$2
if [ -z "$str" ]; then
  str=performance
fi
echo "tailing $fileName searching for $str"
tail -f $fileName |
  while read line; do
    if [[ $line == *$str* ]]; then
      echo "$line"
    fi
  done
