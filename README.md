# `<f-ua-parser>` [![Build Status](https://travis-ci.org/firmfirm/f-ua-parser.svg?branch=master)](https://travis-ci.org/firmfirm/f-ua-parser)

Web Component wrapper for [https://github.com/faisalman/ua-parser-js](ua-parser-js).

## Installation

```bash
# Assuming Node.js and Bower are already installed
bower install --save f-ua-parser
```

## Overview

The system consists of two elements working together: `<f-ua-parser>` and `<f-ua-parser-domain>`.

`<f-ua-parser>` elements provides content or `value` with translated strings of locale specified in their corresponding `<f-ua-parser-domain>` element.

The language to display isn't set on the `<f-ua-parser>` elements but on the `<f-ua-parser-domain>`. All `<f-ua-parser>` elements are automatically updated after the locale was changed on corresponding `<f-ua-parser-domain>` element.

## Usage

1. Initialize the `<f-ua-parser-domain>` domains.

  ```html
  <!-- Will use the translations from `path/to/locales/default-de.json` -->
  <f-ua-parser-domain
    messages-url="path/to/locales"
    locale="de"></f-ua-parser-domain>

  <!-- Will use the translations from `other/path/foobar-en.json` -->
  <f-ua-parser-domain
    messages-url="other/path"
    domain="foobar"
    locale="en"></f-ua-parser-domain>
  ```

2. Use `<f-ua-parser>` to get the translations.

  ```html
  <!-- Message from "default" domain, with key "welcome".
       Will display placeholder text until translation is loaded. -->
  <f-ua-parser msgid="welcome" placeholder="Welcome!"></f-ua-parser>

  <!-- Message from "foobar" domain, with key "hello".
       Will not display any text, but set and notify "value" property. -->
  <f-ua-parser provider m="foobar.hello" placeholder="Hello!" value="{{msgHello}}"></f-ua-parser>
  <p>[[msgHello]]</p>
  ```

# Development

From here on, documentation will only concern development of this component.

## Dependencies

Element dependencies are managed via [Bower](http://bower.io/). You can
install that via:

    npm install -g bower

Then, go ahead and download the element's dependencies:

    bower install

## Playing With Your Element

If you wish to work on your element in isolation, we recommend that you use
[Polyserve](https://github.com/PolymerLabs/polyserve) to keep your element's
bower dependencies in line. You can install it via:

    npm install -g polyserve

And you can run it via:

    polyserve

Once running, you can preview your element at
`http://localhost:8080/components/f-ua-parser/`, where `f-ua-parser` is the name of the directory containing it.

## Testing Your Element

Simply navigate to the `/test` directory of your element to run its tests. If
you are using Polyserve: `http://localhost:8080/components/f-ua-parser/test/`

### web-component-tester

The tests are compatible with [web-component-tester](https://github.com/Polymer/web-component-tester).
Install it via:

    npm install -g web-component-tester

Then, you can run your tests on _all_ of your local browsers via:

    wct

#### WCT Tips

`wct -l chrome` will only run tests in chrome.

`wct -p` will keep the browsers alive after test runs (refresh to re-run).

`wct test/some-file.html` will test only the files you specify.
