# Inclusive Design Web Components

Web components for the Inclusive Design Research Centre.

## Components

- [Card](src/components/incd-card/README.md)
- [Navigation](src/components/incd-nav/README.md)

## Usage

To use the web components, include the bundle in your HTML via a content
delivery network (CDN):

```html
<script src="https://unpkg.com/@inclusive-design/components/dist/bundle.js" type="module"></script>
<link rel="stylesheet" href="https://unpkg.com/@inclusive-design/components/dist/bundle.css" />
```

Or install it with npm and include the installed package in your HTML:

```npm install --save @inclusive-design/components```

```html
<script src="node_modules/@inclusive-design/components/dist/bundle.js" type="module"></script>
<link rel="stylesheet" href="node_modules/@inclusive-design/components/dist/bundle.css" />
```

This will register all web components. To import individual web components, see
the individual web component documentation linked under the [Components](#components) section above.
