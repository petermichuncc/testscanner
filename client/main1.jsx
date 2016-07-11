import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App1 from '../imports/ui/App1.jsx';
 //injectTapEventPlugin();
     Template.main1.created = function () {



     }

    Template.main1.rendered = function () {


render(<App1 />, document.getElementById('render'));

    }
