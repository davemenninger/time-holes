#!/usr/bin/env bash

rm time-holes.zip
zip -r time-holes.zip index.html js/ assets/map/ assets/sprites/sprite.png 'assets/sprites/kenney_runepack/PNG/Blue/Slab (outline)/' assets/sprites/kenneyrpgpack/PNG/rpgTile159.png assets/sprites/kenneyrpgpack/PNG/rpgTile160.png
butler push time-holes.zip davemenninger/time-holes:html5
