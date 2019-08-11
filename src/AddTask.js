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

  _showingChange = () => {
    this.setState({showing: !this.state.showing})
  }

  handleClickEvent = () => {
    this._showingChange()
  };

  _saveText = (e) => {
    this.setState({savedText: e.target.value})
  }

  _clearText = () => {
    this.setState({savedText: ""});
  }

  render() {
    if (this.props.focused === undefined) {
      return null;
    } else {
      return (
          <>
            {!this.state.showing?
                <div className="add-Icon" role="img" onClick={this.handleClickEvent}>➕</div>:
            null}
            <InputDo _showingChange={this._showingChange} _clearText={this._clearText} focused={this.props.focused}
                     _addItem={this.props._addItem}
                     showing={this.state.showing} text={this.state.savedText} _saveText={this._saveText}/>
          </>
      );
    }
  }
}

export default AddTask;