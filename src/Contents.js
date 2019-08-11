import React from 'react';
import Todo from './Todo';
import AddTask from './AddTask'

// app ==>
const Contents = (props) => {

  let todoList = [];
  let pastedList = [];
  let makeBool = true;
  if (props.todos.length || props.groupsLen) {
    props.todos.forEach((el) => {
      !el.check ? todoList.push(el) : pastedList.push(el)
    });
    if (todoList.length) {
      todoList = todoList.map((el) => <Todo className="actTodo" _deleteItem={props._deleteItem} todo={el} key={el.key}
                                            _changeItem={props._changeItem} _checkItem={props._checkItem}/>);
    }
    if (pastedList.length) {
      pastedList = pastedList.map((el) => <Todo className="inactTodo" _deleteItem={props._deleteItem} todo={el}
                                                key={el.key}
                                                _changeItem={props._changeItem} _checkItem={props._checkItem}/>);
    }
  } else {
    todoList = '텅텅비었습니다. 그렇게 할일이 없나요..? 그룹을 먼저 만들어주세요 ~ 🙅';
    pastedList = '';
    makeBool = false;
  }

  return (
      <>
        <div className="activeList">
          {todoList}
        </div>
        <>
          {makeBool ? <AddTask focused={props.focused} _addItem={props._addItem}/> : null}
        </>
        <div className="inactiveList">
          {pastedList}
        </div>
        <div className="trash-BOx">
        </div>
      </>
  )
};

export default Contents;