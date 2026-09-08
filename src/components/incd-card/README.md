# Inclusive Card

A card web component for the Inclusive Design Research Centre.

## Usage

To use the `incd-card` web component, include it in your HTML via a content
delivery network (CDN):

```html
<script src="https://unpkg.com/@inclusive-design/components/dist/incd-card.js" type="module"></script>
<link rel="stylesheet" href="https://unpkg.com/@inclusive-design/components/dist/incd-card.css" />
```

Or install it with npm and include the installed package in your HTML:

```npm install --save @inclusive-design/components```

```html
<script src="node_modules/@inclusive-design/components/dist/incd-card.js" type="module"></script>
<link rel="stylesheet" href="node_modules/@inclusive-design/components/dist/incd-card.css" />
```

Use the `<incd-card>` element to a clickable card by wrapping it around content
which includes a link:

```html
<incd-card>
    <h2><a href="#projects">Projects</a></h2>
    <p>Learn about some of our active projects.</p>
</incd-card>
```
