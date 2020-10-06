# Tailwind CSS Transpiler

<img src="https://raw.githubusercontent.com/sudoaugustin/tailwindcss-transpiler/master/.github/preview.gif">

<br/>
Tailwind CSS Transpiler transpile/compile your tailwind CSS/SCSS files into pure CSS files.

## Installation

**[Install via the VS Code Marketplace →](https://marketplace.visualstudio.com/items?itemName=sudoaugustin.tailwindcss-transpiler)**

## Features

### Transpile tailwind files

Transpile tailwind CSS/SCSS files `On Save`.

<img src="https://raw.githubusercontent.com/sudoaugustin/tailwindcss-transpiler/master/.github/transpile.png">

### Autoprefix

Add vendor prefixes to your CSS.

<img src="https://raw.githubusercontent.com/sudoaugustin/tailwindcss-transpiler/master/.github/autoprefix.png">

### SCSS supported

Get the features provided by SCSS with `.tailwind.scss`

<img src="https://raw.githubusercontent.com/sudoaugustin/tailwindcss-transpiler/master/.github/scss.png">

### Optimize CSS

Optimize CSS using [clean-css](https://github.com/jakubpawlowicz/clean-css).

<img src="https://raw.githubusercontent.com/sudoaugustin/tailwindcss-transpiler/master/.github/optimize.png">

## Requirements

Tailwind CSS Transpiler works only with `.tailwind.css` or `.tailwind.scss` files.

## Settings

### `tailwindTranspiler.minifyOutputFile`

Controls whether the exported CSS should be compressed.**Default: `false`**

```json
{
  "tailwindTranspiler.minifyOutputFile": true
}
```

### `tailwindTranspiler.savePath`

The path to store transpiled CSS.**Default: `null`**
<br/>_Set the path relative from workspace root._

```json
{
  "tailwindTranspiler.savePath": "public/css"
}
```

### `tailwindTranspiler.tailwindConfigPath`

The path for tailwind configuration file. **Default: `tailwind.config.js`**
<br/>_Set the path relative from workspace root._

```json
{
  "tailwindTranspiler.tailwindConfigPath": "config/tailwind.js"
}
```

### `tailwindTranspiler.browsersList`

This setting controls the target browsers.See [Browserslist](https://github.com/browserslist/browserslist) docs for available queries. **Default:`[ "> 1%", "last 2 versions" ]`**

```json
{
  "tailwindTranspiler.browsersList": ["last 1 version", "> 1%", "ie 10"]
}
```

<br/>
<br/>
---

If you found any bug or if you have any suggestion , feel free to report or suggest me.You can contact me on [Twitter](https://twitter.com/sudoAugustin).

<br/>
<p style="text-align:center;">
A project by Augustin Joseph
</p>
