# Content Card

A pattern for formatting html content into 3x1 and 2x1 blocks.

## Getting started

    npm install content-block

You just need to include this file in your build:

    dist/_content-block.scss

Then you can set up your markup like:

<section class="column-container">
    <div class="content-card col-1-2">
        <div class="content-card__header">
            <h1 class="content-card__header-text">Awesome Header</h1>
        </div>
        <div class="content-card__content-wrapper">
            <div class="content-card__body">
                <p>The best body content goes here</p>
            </div>
            <div class="content-card__footer">
                <p>Also a spot for footer stuffs</p>
            </div>
        </div>
    </div>
    <div class="content-card col-1-2">
        <div class="content-card__header">
            <h1 class="content-card__header-text">Awesome Header</h1>
        </div>
        <div class="content-card__content-wrapper">
            <div class="content-card__body">
                <p>The best body content goes here</p>
            </div>
            <div class="content-card__footer">
                <p>Also a spot for footer stuffs</p>
            </div>
        </div>
    </div>
</section>

<section class="column-container">
<div class="content-card col-1-3">
    <div class="content-card__header">
        <h1 class="content-card__header-text">Awesome Header</h1>
    </div>
    <div class="content-card__content-wrapper">
        <div class="content-card__body">
            <p>The best body content goes here</p>
        </div>
        <div class="content-card__footer">
            <p>Also a spot for footer stuffs</p>
        </div>
    </div>
</div>
<div class="content-card col-1-3">
    <div class="content-card__header">
        <h1 class="content-card__header-text">Awesome Header</h1>
    </div>
    <div class="content-card__content-wrapper">
        <div class="content-card__body">
            <p>The best body content goes here</p>
        </div>
        <div class="content-card__footer">
            <p>Also a spot for footer stuffs</p>
        </div>
    </div>
</div>
<div class="content-card col-1-3">
    <div class="content-card__header">
        <h1 class="content-card__header-text">Awesome Header</h1>
    </div>
    <div class="content-card__content-wrapper">
        <div class="content-card__body">
            <p>The best body content goes here</p>
        </div>
        <div class="content-card__footer">
            <p>Also a spot for footer stuffs</p>
        </div>
    </div>
</div>
</section>
