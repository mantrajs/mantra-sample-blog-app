## A Sample Blog App Written in Mantra

This is a sample blog app written in [Mantra](https://github.com/kadirahq/mantra) covering core features of it.

### Setting Up

* Clone this repo
* Do `npm install` to install dependencies
* Make sure you've installed Meteor locally

### Running The App

Simply start your app with `meteor -p 5005`. 
Then you can access the app on <http://localhost:5005>

### Running Tests

In this app, every part of the client side is fully tested using the familiar tools like Mocha, Chai and Sinon.

Run tests with:

```
npm test
```

**See package.json for more information about testing setup.**

### Running Storybook

This app is setup for [React Storybook](https://github.com/kadirahq/react-storybook). Run following command to start the React Storybook:

```
npm run storybook
```

> **NOTE:** If this gives you missing module errors, React Storybook requires npm v3. Here's how to install npm3 and get it setup.
> ```js
> npm install -g npm@3.8.5
> rm -rf node_modules
> npm install
> npm run storybook
> ```
