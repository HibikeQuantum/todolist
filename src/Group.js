import React from 'react';

// ==> leftMenu
class Group extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      time: null
    };
  }

  _changeFocus = () =>{
    console.log(this)
    this.props._changeFocus(this.props.data.index);
  };

  // _deleteGroup() {
  //   this.props._deleteGroup(this.props.data.key);
  //   this.props._deleteItemByGroup(this.props.data.index);
  // };


  _onDragEnd = () => {
    const endTime = new Date();
    if (this.state.time - endTime < -1500) {
      this.props._deleteGroup(this.props.data.key);
      this.props._deleteItemByGroup(this.props.data.index);
    } else {
      console.log('삭제 하려면 1.5초 이상 들고 있다가 드랍하세요');
    }
  };

  _onDragStart = () => {
    this.setState({time: new Date()});
  }

  render() {
    let status = "";
    if (this.props.focused === this.props.data.index) {
      status = "✅";
    } else {
      status = "○";
    }

    return (
        <div draggable={true} onDragEnd={this._onDragEnd} onDragStart={this._onDragStart} className="group-box"
             onClick={this._changeFocus}>
          {status} {this.props.data.name}
        </div>
    )
  }
};

export default Group;