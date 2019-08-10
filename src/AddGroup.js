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

  showingChange = () => {
    this.setState({showing: !this.state.showing})
  };

  handleClickEvent = () => {
    this.showingChange()
  };

  saveText = (e) => {
    this.setState({savedText: e.target.value})
  };

  clearText = () => {
    this.setState({savedText:""});
  };

  render() {
    return (
        <div>
          <span role="img" className="add-Icon" onClick={this.handleClickEvent}>➕</span>
          <InputGroup clearText={this.clearText} group={this.props.group} addGroup={this.props.addGroup} showing={this.state.showing} text={this.state.savedText} saveText={this.saveText}/>
        </div>
    );
  }
}

export default AddGroup;