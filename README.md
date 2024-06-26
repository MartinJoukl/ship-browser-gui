# Ship browser gui
This application is gui for https://github.com/MartinJoukl/ShipBrowser/tree/master
It is created in react and can be run using `npm start` - the application runs on http://localhost:3000.

## Route overview
Gui consists of 4 routes, 3 visible to non-registered user.
Main routes are Ship Overview, Skin Overview and login visible by public and Administration visible by logged in user. There as also another subroute of Ship Overview - Ship Detail, which is accesible by clicking on any card of displayed ship.

Ship overview - displays cards of all ships in game, which can be filtered by in-build filters.
Skin overview - displays gallery of all skins in game, which can be filtered by in-build filters.
Ship Detail - displays detail of given ship including it's skills and skin gallery.
Login - displays a login form.
Administration - displays administration panel which has buttons for synchronizing with remote and generating skin image previews.

## Requirements
Application requires the backend to be running.


# React info
## Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
