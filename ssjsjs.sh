#!/usr/bin/env bash

for SRC in `find /home/steve/mew/knowledge-base-v5/source/_posts -depth`
do
    DST=`dirname "${SRC}"`/`basename "${SRC}" | tr '_' '-'`
    if [ "${SRC}" != "${DST}" ]
    then
        [ ! -e "${DST}" ] && mv -T "${SRC}" "${DST}" || echo "${SRC} was not renamed"
    fi
done