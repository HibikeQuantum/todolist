import React, {Component} from 'react';
import ModifyDo from './ModifyDo';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      savedText: this.props.todo.txt,
      modifyText: false,
    });
  }

  handleClick = () => {
    this.props.checkItem(this.props.todo.key)
  };

  handleModifyClick = () => {
    this.setState({modifyText: !this.state.modifyText});
  };

  saveText = (e) => {
    this.setState({savedText: e.target.value})
  };

  _dragEnd = (e) => {
    this.props.deleteItem(this.props.todo.key)
  }


  render() {

    return (
        <div className="Todo-box" draggable={true} onDragEnd={this._dragEnd} >
          <input checked={this.props.todo.check} onChange={this.handleClick} type="checkbox" className="CheckBox"/>
          {this.state.modifyText ?
              <ModifyDo endModify={this.handleModifyClick} changeItem={this.props.changeItem}
                        text={this.state.savedText} saveText={this.saveText} todo={this.props.todo}/> :
              <div onClick={this.handleModifyClick} className=" Todos-txt">{this.props.todo.txt}</div>
          }
        </div>
    );
  }
}

export default Todo;