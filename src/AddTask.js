import React from 'react';
import {Component} from 'react';
import InputDo from './InputDo';

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
    this.setState({savedText:""});
  }

  render() {
    return (
        <div>
          <span className="add-Icon" onClick={this.handleClickEvent}>➕</span>
          <InputDo clearText={this.clearText} group={this.props.group} addItem={this.props.addItem} showing={this.state.showing} text={this.state.savedText} saveText={this.saveText}/>
        </div>
    );
  }
}

AddTask.propTypes = {};
export default AddTask;