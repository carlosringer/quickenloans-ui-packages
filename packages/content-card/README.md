# Content Card

A Pattern for adding a basic card pattern with areas for header, body, and footer content to your application.

## Getting started

    npm install content-card

You just need to include this file in your build:

    dist/_content-card.scss

Then you can set up your markup like:

    <div class="content-card">
        <div class="content-card__header">
            <h1 class="content-card__header-text"></h1>
        </div>
        <div class="content-card__body"></div>
        <div class="content-card__footer"></div>
    </div>
