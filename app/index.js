import React, { Component } from 'react';
import { render } from 'react-dom';

import Main from './jsx/Main.jsx';

//type of deck chosen for the planning poker, could be substituted for more creative ideas
const deck = ["0", "1/2", "1", "3", "5", "8", "13", "20", "40", "?"];

render(<Main deck={deck} />, document.querySelector('#app'));
