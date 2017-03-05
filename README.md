# planningDeck :spades::hearts::clubs::diamonds:

A small application that creates a planning deck to be used in planning poker.

####Techniques used for this project are:
- React - For the efficiency regarding DOM updates, the easiness in creating components and a familiarity with the framework.
- ES6/ES7 - Mainly because of the import/export simplicity and lexical scoping.
- Babel - Used to compile JSX and ES6/ES7.
- CSS - Because of the application size I felt that there were no need for a preprocessor which I would have chosen if the
application would have been larger.
- Enzyme - To simplify testing of the React components. Only shallow rendering is used so no need for a headless browser.
Magical :sparkles:
- Expect - I am not very knowledgeable about assertion tools but this seemed simple and came with spy possibilities.
- Mocha - For running tests.
- Webpack - To simplify development. (e.g. no need to think about bundling or watch for changes)
- Npm - For package handling.
- Serve - Used mainly for React devtool purposes.

####Run:
```
npm install
npm run serve
npm run build
npm run watch
npm runt test
```

####With more time:
I would look over the animations. Either create a new Card component containing both back and front or find a way
to make sure that the previous component is unmounted before the new component is mounted. I would also like to
see the application in different browsers and screens. I might also have another go at naming variables.

The project is found at [GitHub](https://github.com/tkomstadius/planningDeck).
