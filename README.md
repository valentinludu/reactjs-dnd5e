# Dungeon and Dragons Character Configurator

Character configuration of the 5th Edition Dungeons and Dragons built with React.

Config your character as you please and see all the details of your new built character.

DnD5e API: http://www.dnd5eapi.co/docs

Stage app: https://dnd5e-character-config-stage.herokuapp.com/
Production app: https://dnd5e-character-config.herokuapp.com/

Stage link is up to date with "develop" branch and production link is up to date with the "main" branch.

Before you start adding a new feature you need to:

1. Go to develop branch and start a new branch from there, preferably named feature/YOUR_BRANCH_NAME.
2. Before committing your code run yarn test && yarn lint && yarn stylelint.
3. Commit and push your changes.
4. Create a pull request on github and make sure the pipelines pass.

Once you push your code the following steps will run inside the pipeline build job:

- yarn install
- yarn test
- yarn lint
- yarn stylelint

* If the scripts pass then you will be able to merge the code into develop.

I am using Heroku to host the app and CircleCI for CI/CD.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn lint`

Find and fix problems in your JavaScript code.

### `yarn stylelint`

Find and fix problems in your styles.
