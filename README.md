# Image-processing-API- Udacity project

This is an endpoint for image resizing , you hit the endpoint with filename ,width and height and it return the resized image for you with caching option for reloading

## Built with

- Node
- Express
- Typescript

## Getting Started

> This is an list of needed instructions to set up your project locally, to get a local copy up and running follow these instructions.

### Installation

1. **_Clone the repository_**

```sh
git clone git@github.com:raazansalah/Image-processing-API.git
```

2. **_Navigate to repository directory_**

```sh
$ cd Image-processing-API
```

### Running

1. **_Install dependencies and setup the server_**

```sh
$ npm install
```

2. **_code formating_**

```sh
$ npm run prettier
```

3. **_code linting_**

```sh
$ npm run lint
```

4. **_test the server_**

```sh
$ npm run test
```

5. **_build the server_**

```sh
$ npm run build
```

5. **_start the server_**

```sh
$ npm run satart
```

and now you can access from the port 8080

### Dependencies

- prettier
- linter
- typescript
- nodemon
- express
- sharp

### test URL's

- sucess

  http://localhost:8080/api/images?filename=fjord&width=500&height=2000

- failed

  http://localhost:8080/api/images?filename=fjord&width=500&height=-50
  http://localhost:8080/api/images?filename=fjord&width=500&height=
