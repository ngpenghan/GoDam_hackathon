# React Accordion
A really lightweight, accessible, semantic, super simple accordion for React

## TODO
Put some badges including maybe NPM bundle size

## Installation
TODO

## Requirements
Support React 17 and upwards

## How to use
The ReactAccordion takes an array of items and optionally an onClick function.  
The items must include: a `name` which should be a unique string and a `heading` which should be a ReactNode.  
The items will probably also include a `child` which should also be a ReactNode.  
You can also add `open: true` to any items that you would like to initially be open. 

The onClick function will be triggered every time one of the headings is clicked. The function will receive the click event and an index for the element that was clicked. It is likely that you will want to call `event.preventDefault();` in order to avoid your function conflicting with the browser. 

If you would like only one item open at a time, you can instead use `SingleItemOpenAccordion` which will handle that logic for you. This accordion accepts an array of items.

## Demo
You can see a demo of what is possible with this package at https://votemike.github.io/react-accordion/.

## Contributing
See [CONTRIBUTING.md](./CONTRIBUTING.md)

## Authors
* Michael Gwynne
* Mark Wylde
