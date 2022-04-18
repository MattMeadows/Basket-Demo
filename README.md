# Shopping Cart Demo

## Requirements

Install nodejs & yarn using a stable version `node 16.13.2` is functional at the time of writing

## Getting Started

The application is built webpack configs and makes use of Typescript for type checking components

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

```
cd /dist
http-server
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
