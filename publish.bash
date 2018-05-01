#!/usr/bin/env bash

rm time-holes.zip
zip -r time-holes.zip index.html js/ assets/map/ assets/sprites/sprite.png 'assets/sprites/kenney_runepack/PNG/Blue/Slab (outline)/'
butler push time-holes.zip davemenninger/time-holes:html5
