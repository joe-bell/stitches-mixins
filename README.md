# Stitches Mixins

> Sass-style shorthand utils for [Stitches][stitches] 🥣

<a href="https://www.npmjs.com/package/stitches-mixins">
  <img alt="NPM Version" src="https://badgen.net/npm/v/stitches-mixins" />
</a>
<a href="https://badgen.net/npm/types/stitches-mixins">
  <img alt="Types Included" src="https://badgen.net/npm/types/stitches-mixins" />
</a>
<a href="https://badgen.net/github/license/joe-bell/stitches-mixins">
  <img alt="Apache-2.0 License" src="https://badgen.net/github/license/joe-bell/stitches-mixins" />
</a>
<a href="https://www.npmjs.com/package/stitches-mixins">
  <img alt="NPM Downloads" src="https://badgen.net/npm/dm/stitches-mixins" />
</a>
<a href="https://twitter.com/joebell_">
  <img alt="Follow @joebell_ on Twitter" src="https://img.shields.io/twitter/follow/joebell_.svg?style=social&label=Follow" />
</a>

## Table of Contents

1. [Introduction](#introduction)
1. [Default Mixins](#mixins)
1. [Setup](#setup)
1. [Usage](#usage)

## Introduction

[Stitches `utils`][stitches:utils] are a great tool for reusing dynamic snippets of CSS across your project.

Unfortunately, for `utils` that **don't** require a `value`, [shorthand isn't an option][mdn:initializer].

A common workaround is to set the `util` value to `true`:

```ts
// without stitches-mixins
const Button = styled("button", {
  someUtilKey: true,
  someOtherUtilKey: true,
  color: "$gray900",
  // …styles
});
```

### Solution

`stitches-mixins` offers an alternative; allowing snippets of static CSS to be included via the `include` key:

```ts
// with stitches-mixins
const Button = styled("button", {
  include: "someUtilKey",
  // *or* include multiple…
  include: ["someUtilKey", "someOtherUtilKey"],
});
```

## Default Mixins

To kickstart your mixins toolbox, `stitches-mixins` includes the following by default:

| Key                   | Description                                                                                                                                    |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `box`                 | Layout primitive. <br /><small>(Credit: [Reflexbox][credit:box])</small>                                                                       |
| `breakout`            | "Breakout" of a parent's `maxWidth` to fill the viewport width. <br /><small>(Credit: [Sven Wolfermann][credit:breakout])</small>              |
| `minHeightScreen`     | Fills the viewport height, with additional support for iOS Safari.                                                                             |
| `screenReaderOnly`    | Hides an element visually without hiding from screen readers and other ATs. <br /><small>(Credit: [Tailwind][credit:screenreaderonly])</small> |
| `notScreenReaderOnly` | Reverts styles set by `screenReaderOnly`. <br /><small>(Credit: [Tailwind][credit:screenreaderonly])</small>                                   |

## Setup

1. Install the package via your favourite package manager:

   ```sh
   npm i stitches-mixins
   ```

2. In your [Stitches config][stitches:config], assign `mixins()` to a new `include` `util`:

   ```tsx
   // stitches.config.ts
   import { createCss } from "@stitches/react";
   import { mixins } from "stitches-mixins";

   export const { css, styled } = createCss({
     theme: {},
     utils: {
       // with custom mixins
       include: mixins({
         orchidShadow: {
           boxShadow: "0 25px 50px -12px orchid",
         },
       }),
       // …or without
       include: mixins(),
     },
   });
   ```

   > Note: Your `stitches-mixins` util doesn't _need_ to be called `include`, it can be anything you want it to be.

## Usage

Use `include` like you would with any other [Stitches `util`][stitches:utils]

> 💡 Using `include` at the beginning of your style object is heavily recommended, allowing for easy overriding later

### Single-use

```tsx
// components/card.ts
import { styled } from "../stitches.config";

const Card = styled("div", {
  include: "box",
  // ...styles
});
```

### Combining Mixins

```tsx
// components/card.ts
import { styled } from "../stitches.config";

const Card = styled("div", {
  include: ["box", "orchidShadow"],
  // ...styles
});
```

### Nested

Like other `utils`, mixins can be used inside other selectors:

```tsx
// components/skip-link.ts
import { styled } from "../stitches.config";

const SkipLink = styled("a", {
  include: ["box", "screenReaderOnly"],
  "&:focus": {
    include: "notScreenReaderOnly",
  },
  // ...styles
});
```

[credit:box]: https://github.com/rebassjs/rebass/tree/master/packages/reflexbox
[credit:breakout]: https://codepen.io/maddesigns/pen/rOMgpQ/
[credit:screenreaderonly]: https://tailwindcss.com/docs/screen-readers
[mdn:initializer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
[stitches]: https://github.com/modulz/stitches
[stitches:config]: https://stitches.dev/docs/installation#create-your-config-file
[stitches:utils]: https://stitches.dev/docs/utils
