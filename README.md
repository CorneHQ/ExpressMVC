# 📘 Express with MVC structure boilerplate

A simple MVC structure with ExpressJS with features as autoload middleware and autoload routes. This boilerplate also contains the whole setup for MongoDB including example schemas and a model. There's also a scheduler to run specific tasks at certain times.

## 🔧 Getting started

### Requirements

- [Node](https://nodejs.org/en/) >= 14.17.3
- [Yarn](https://yarnpkg.com/) >= 1.22.17

### Download

Clone the repository

```sh
git clone - insert url here -
```

Or [download]() directly as a zip file

### Installing the project

1. Go to the directory of the project
2. Run `yarn` to install the node modules
3. Copy the .env.example to .env with `cp .env.example .env`
4. Fill in the data of the .env file
5. Start the server with `yarn serve`

## 🔥 Commands

| Command               | Description                                                |
| --------------------- | ---------------------------------------------------------- |
| `yarn serve`          | Starts the application with nodemon                        |
| `yarn prettier:fix`   | Uses prettier to clean up the files (OVERWRITES THE FILES) |
| `yarn prettier:check` | Uses prettier to check which files needs to get clean up   |
