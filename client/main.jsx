import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from '../imports/ui/App.jsx';
 injectTapEventPlugin();
 


    Template.main.rendered = function () {

render(<App />, document.getElementById('render-target'));

    }
 