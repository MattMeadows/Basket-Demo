# Shopping Cart Demo

## Requirements

Install nodejs & yarn using a stable version `node 16.13.2` is functional at the time of writing

## Getting Started

The application is built with:

- Webpack
- React
- React Context & Localstorage
- Typescript
- Tailwind CSS

From the root of the project run:

```
yarn install
```

## Commands

### Development:

```
yarn dev
```

### Production:

```
yarn build
```

Once the application has been built,

install [serve](https://www.npmjs.com/package/serve)

```
npx serve -s ./dist
```

### Folder Structure

```
├── Components
│   ├── atoms
|   |   └── [atomName]
|   |       └── [atomName].js
|   |       └── [atomName].stories.js
|   |       └── index.js
│   ├── molecules
|   |   └── [moleculeName]
|   |       └── [moleculeName].js
|   |       └── [moleculeName].stories.js
|   |       └── index.js
│   ├── organisms
|   |   └── [organismName]
|   |       └── [organismName].js
|   |       └── index.js
```
