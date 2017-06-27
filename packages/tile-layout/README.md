# Tile Layout

A layout pattern for formatting html content into 3x1 and 2x1 tiles.

## Getting started

    npm install tile-layout

You just need to include this file in your build:

    dist/_tile-layout.scss

Then you can set up your markup like:

<section class="l-tile-layout">
    <div class="tile-layout--col-1-2"></div>
    <div class="tile-layout--col-1-2"></div>
</section>

<section class="l-tile-layout">
    <div class="l-tile-layout--col-1-3"></div>
    <div class="l-tile-layout--col-1-3"></div>
    <div class="l-tile-layout--col-1-3"></div>
</section>
