#!/bin/bash
set -e
set -o pipefail

BROWSERIFY=~/local/node_modules/.bin/browserify

newer_than(){
    F=$1
    shift
    for var in $*; do
	echo VVV $var
	if [ $var -nt $F ];then
	    echo $var NEWER THAN $F
	    return 0
	fi
    done
    return 1
}

if newer_than js/bundle.js src/*.js ; then
    echo RECOMPILING
    mkdir -p js
    ${BROWSERIFY} src/*.js -o js/bundle.js
else
    echo NOT RECOMPILING
fi
