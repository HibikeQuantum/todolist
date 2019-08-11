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
    this.props._checkItem(this.props.todo.key)
  };

  _handleModifyClick = () => {
    this.setState({modifyText: !this.state.modifyText});
  };

  _saveText = (e) => {
    this.setState({savedText: e.target.value})
  };

  _onDragEnd = () => {
    const endTime = new Date();
    this.state.time - endTime < -1500 ? this.props._deleteItem(this.props.todo.key) : console.log('삭제 하려면 1.5초 이상 들고 있다가 드랍하세요');
  };

  _onDragStart = () => {
    this.setState({time: new Date()});
  }


  render() {
    const style = {
      textDecoration: this.props.todo.check ? 'line-through' : 'none'
    };
    return (
        <div className="Todo-box" draggable={true} onDragStart={this._onDragStart} onDragEnd={this._onDragEnd}>
          <input className="CheckBox" checked={this.props.todo.check} onChange={this.handleClick} type="checkbox"/>
          {this.state.modifyText ? <ModifyDo className="Modify-box" _handleModifyClick={this._handleModifyClick}
                                             _changeItem={this.props._changeItem}
                                             text={this.state.savedText} _saveText={this._saveText}
                                             todo={this.props.todo}/>
              : <div style={style} onClick={this._handleModifyClick} className="Todos-txt">{this.props.todo.txt}</div>
          }
        </div>
    );
  }
}

export default Todo;