import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App2 from '../imports/ui/button.jsx';
 //injectTapEventPlugin();
     Template.button.created = function () {



     }

    Template.button.rendered = function () {


render(<App2 />, document.getElementById('render-button'));

    }
