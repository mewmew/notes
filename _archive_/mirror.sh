#!/bin/bash
if [ $# -ne 1 ]; then
	echo "Usage: mirror.sh URL"
	exit
fi
wget -E -H -k -p "$1"
