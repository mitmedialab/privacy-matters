# 👀 Privacy Matters

Check out the site at https://letstalkprivacy.media.mit.edu/.

## Installation

Privacy Matters is a static site built using [Gatsby](https://www.gatsbyjs.org).

If you haven't already, install [Node Version Manager](https://github.com/creationix/nvm).

Install and use version node version 12.14.1:

```shell
$ nvm install 12.14.1
$ nvm use 12.14.1
```

Install requirements:

```shell
$ npm install
```

## Develop

```shell
gatsby develop
```

Your site is now running at `http://localhost:8000`.

## Editing Content

About page and quotes are sourced from markdown files. Check out this [markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for syntax.

### Policy Content

Policy about page content is stored in [src/markdown-pages](https://github.com/mitmedialab/privacy-matters/tree/master/src/markdown-pages). Edit the corresponding file to change the about page content.

### Quotes

Policy quotes are stored in [src/markdown-pages/quotes](https://github.com/mitmedialab/privacy-matters/tree/master/src/markdown-pages/quotes). Update the quote by changing the corresponding file or adding a file.

The frontmatter fields and corresponding values are:

| Field          | Description                                              |
| -------------- | -------------------------------------------------------- |
| `quotee`       | Person to credit, e.g. `Jane Doe, Engineer`              |
| `policy`       | One of the following: `CORPA`, `SMART`, `ONLINE_PRIVACY` |
| `responseType` | One of the following: `pro`, `con`, `highlight`          |

Quotes will be displayed on the policy's page.

## Deploy

To test out your production build of the site (a good thing to do before deploy), the following to build the production page and serve it using a local production-like server:

```shell
gatsby build
gatsby serve
```

When you're ready to deploy the site run the following:

```shell
npm run deploy
```

This runs the static build script and pushes to the `gh-pages` branch. This is the branch Github Pages are viewed from.
