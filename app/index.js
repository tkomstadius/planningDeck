import React, { Component } from 'react';
import { render } from 'react-dom';

import Main from './jsx/Main.jsx';

const deck = ["0", "1/2", "1", "3", "5", "8", "13", "20", "40", "?"]

render(<Main deck={deck} />, document.querySelector('#app'));
