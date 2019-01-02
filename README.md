# NPY IMG VIS

[![Build Status](https://travis-ci.org/sarlam/npy-npy-img-vis.svg?style=flat-square&branch=master)](https://travis-ci.org/sarlam/npy-img-vis)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fsarlam%2Fnpy-img-vis.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fsarlam%2Fnpy-img-vis?ref=badge_shield)

> Polymer web-app to display 512*512 grey-scales images from an npy file.

## Usage

Clone this repository:

```bash
git clone --depth 1 https://github.com/PolymerX/polymer-skeleton [your-app-name]
```

Then start building your application!

```bash
yarn
```

#### Developing

Start the `webpack-dev-server` on localhost `http://localhost:3000` with hot-reload and watch on `.pcss` files.

```bash
yarn dev
```

#### Test

XO for code style, Stylelint for PostCSS linting, and WCT for components tests:

```bash
yarn test
```

Run [Lighthouse](https://github.com/GoogleChrome/lighthouse) for testing the PWA capabilities:

```bash
yarn test:lighthouse
```

#### Build

(Almost) production-ready (`webpack --optimize-minimze` and copy statics) to `dist` folder. Also generating Service Workers. The command will also create the `module` version of the `bundle` ready to be loaded as `type=module`.

```bash
yarn build
```


## Styling components with PostCSS

During development `.pcss` files will be watched, compiled and injected to the relative `<style>` tag within the component template. The CSS is scoped to the component so don't worry about CSS specificity, you can also use `:host`, `:host-context` and `:root` selectors. Read more about [styling web components](https://www.polymer-project.org/2.0/docs/devguide/style-shadow-dom) and [custom CSS properties](https://www.polymer-project.org/2.0/docs/devguide/custom-css-properties).

We also include Autoprefixer plugin, if you don't know how it works (...and you should), it allows you to write CSS without worrying about vendor prefixes. Just write your css properties prefix-free and let autoprefixer do the work for you when compiling.

**How about commons styles?**
You can simply `import` any other `.pcss` file within your main component `.js` file and print it inside the `template()`.


## [**@webcomponents/webcomponentsjs**](https://github.com/webcomponents/webcomponentsjs)

We are getting the `webpcomponents-loader.js` polyfill from GitHub using NPM/Yarn and copying it into a `vendor` folder with a `Node` script.


## Contributors

| Name                      | Website                  |
| ------------------------- | ------------------------ |
| **Alessio Occhipinti**    | <https://godev.space>    |
| **Mattia Astorino**       | <http://equinsuocha.io/> |


## License

PolymerX © MIT


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fsarlam%2Fnpy-img-vis.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fsarlam%2Fnpy-img-vis?ref=badge_large)