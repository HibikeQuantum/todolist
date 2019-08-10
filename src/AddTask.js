import React from 'react';
import {Component} from 'react';
import InputDo from './InputDo';

// ==> Contents
class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      showing: false,
      savedText: ""
    });
  }

  showingChange = () => {
    this.setState({showing: !this.state.showing})
  }

  handleClickEvent = () => {
    this.showingChange()
  };

  saveText = (e) => {
    this.setState({savedText: e.target.value})
  }

  clearText = () => {
    this.setState({savedText: ""});
  }

  render() {
    if (this.props.focused === undefined) {
      return null;
    } else {
      return (
          <div>
            <span role="img" className="add-Icon" onClick={this.handleClickEvent}>➕</span>
            <InputDo showingChange={this.showingChange} clearText={this.clearText} focused={this.props.focused} addItem={this.props.addItem}
                     showing={this.state.showing} text={this.state.savedText} saveText={this.saveText}/>
          </div>
      );
    }
  }
}

export default AddTask;