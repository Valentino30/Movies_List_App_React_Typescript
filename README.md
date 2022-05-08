# Movies App

This app allows you to type in any movie related keyword and get the first 20 listings from TheMovieDB API, including the movie's title, year and backdrop image.

## Getting Started

Here is how to get started with the project:

- Get your private API key on [TheMovieDB Developer's Portal](https://developers.themoviedb.org/3/getting-started/introduction)
- Clone the repo locally and open it using your favorite IDE (i.e. [VSCode](https://code.visualstudio.com/))
- Add your API key to the .env.example file and rename the file as .env
- Run the command `yarn` in the project directory to install all dependencies
- Run the command `yarn start` in the project directory to launch the app
- Run the command `yarn test` in the project directory to run all unit tests

The app will run in development mode at [http://localhost:3000](http://localhost:3000) and the page will automatically reload if you make any changes.

## Usage

- Type any movie related keyword in the input field and hit enter
- TheMovieDB's API will return 20 movies that include your selected keyword
- Each movie will be displayed with a media card containing the movie's image, title and year

## Dependencies

This project relies on the following dependencies:

- [Create React App Typescript](https://create-react-app.dev/docs/adding-typescript/)
- [Styled Components](https://styled-components.com/)
- [ENV CMD](https://www.npmjs.com/package/env-cmd)
- [Axios](https://axios-http.com/)
