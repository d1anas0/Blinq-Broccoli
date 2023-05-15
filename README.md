# Welcome to Broccoli & Co.

A simple webpage and signup form for an early invite to access Broccoli & Co.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app); given that this is a simple single-page web application, I opted to use Material UI over Bootstrap as it provided for everything I envisioned I'd need for this webpage and felt it was a more straightforward solution at this point in time.

That said, one of the challenges I'm currently still trying to resolve, is having the <TextField> colour (set at 'success') to only show as that colour theme, when the user's entries has been correctly entered (ie. meets validation requirements).

Things I'd look to implement:

- should add accessibility labels
- properly establish a design system and implement it as a theme, instead of hardcoding HEX codes throughout the code. Particularly important if I were to continue building on this.
- in the same vein as the dot point above, I would try to add TypeScript to this project, or at minimum PropTypes - though I've had a little experience with TypeScript, and none with PropTypes. So I would opt for TypeScript.
- the file FormModal.js is getting quite big, would look to refactor the code and make it more dry and easier to follow.
- if the form becomes more complex than it is, I would look to add react-hook-form to handle the form validation for me.
- use broccoli themed emojis! 🥦 and enhance the webpages' styling overall, with images etc (surprisingly hard to find a suitable image of broccoli that doesn't look like a green tree 😅).
- would need to revisit tests, was a struggle trying to write and run tests as the machine I'm developing on just couldn't keep up (in fact it would take several seconds to show even simple UI changes and often I would have to only launch the app after I've added the new code, and then stop it again before continuing)

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
