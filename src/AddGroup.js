import React from 'react';
import InputGroup from "./InputGroup";

class AddGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      showing: false,
      savedText: ""
    });
  }

  _showingChange = () => {
    this.setState({showing: !this.state.showing})
  };

  handleClickEvent = () => {
    this._showingChange()
  };

  _saveText = (e) => {
    this.setState({savedText: e.target.value})
  };

  _clearText = () => {
    this.setState({savedText:""});
  };

  render() {
    return (
        <div>
          {this.state.showing===false? <span role="img" className="add-Icon" onClick={this.handleClickEvent}>➕</span>:null}
          <InputGroup _showingChange={this._showingChange} _clearText={this._clearText} group={this.props.group} _addGroup={this.props._addGroup} showing={this.state.showing} text={this.state.savedText} _saveText={this._saveText}/>
        </div>
    );
  }
}

export default AddGroup;