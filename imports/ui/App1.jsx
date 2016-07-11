import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import MyAwesomeReactComponent from './MyAwesomeReactComponent';
//import MyAwesomeReactComponent from '../imports/ui/App.jsx';
 import { Tasks } from '../api/tasks.js';
import Task from './Task.jsx';

// App component - represents the whole app
const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};
var PagePic = React.createClass({
  render: function() {
    return (
       
      <img src={'logo.jpg'} className="z-depth-3"/>
      

    );
  }
});
export default class App1 extends Component {
    
     constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }
 handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
 
    Tasks.insert({
      text,
      createdAt: new Date(), // current time
    });
 
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
handleRequestClose() {
    this.setState({
      open: false,
    });
  }
 handleTouchTap() {
    this.setState({
      open: true,
    });
  }
  render() {


    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );
    return (
        

    
 <MuiThemeProvider >
 
      <div id="repairlog_container" className="center">
        <header>
         <PagePic/>
    <div id="centered_box"  className="z-depth-5 center">
           <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              id="initialstest"
              ref="textInput"
              placeholder="Type to add new tasks"
            />
            <RaisedButton
            label="ok"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />
          </form>
           </div>
        </header>
 
        
      </div>
      
         </MuiThemeProvider>
    );
  }
}

App1.propTypes = {
  tasks: PropTypes.array.isRequired,
};
 
export default createContainer(() => {
  return {
      tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
}, App1);