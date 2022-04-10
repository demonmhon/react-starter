# react-17x-starter

The react 17x starter.

## Getting started

For development, set your environment variables in `.env.development`, update all variables with correct values

```bash
$ cp .env.example .env.development
```

> `.env.development` is for local development, it ignored by git.

Install dependencies

```bash
$ npm install
```

The start the development server (webpack) with

```bash
$ npm start:dev
```


## Scripts

| Script | Description |
|-|-|
| `start` | Serve the built app from `dist`, (must build first) |
| `start:dev` | Start the app with `development` mode, `webpack-dev-server` and hot module replacement (HMR) enabled |
| `test` | Jest and execute all the tests |
| `test:coverage` | Generate a coverage report |
| `test:watch` | Run all the tests and keep on watch mode |
| `build` | Build the production build |
| `analyze` | Run `webpack-bundle-analyzer` to visualize size of webpack output files |

## Build Docker image

```bash
docker build . -t react-17x-stater:latest
```


## Resources

For starter components. Find out more on [react-16x-starter-components](https://github.com/demonmhon/react-16x-starter-components).

 * [Feather Icons](https://github.com/feathericons/feather)


## License

[MIT](LICENSE.md)
