import React from 'react';
import Todo from './Todo';
import AddTask from './AddTask'

// app ==>
const Contents = (props) => {
  const focused = props.focused;

  let todoList = [];
  let pastedList = [];
  let makeBool = true;
  if (props.todos.length || props.groupsLen) {
    props.todos.forEach((el) => {
      if (!el.check) {
        todoList.push(el)
      } else {
        pastedList.push(el)
      }
    });
    if (todoList.length) {
      todoList = todoList.map((el) => <Todo deleteItem={props.deleteItem} todo={el} key={el.key} changeItem={props.changeItem} checkItem={props.checkItem}/>);
    }
    if (pastedList.length) {
      pastedList = pastedList.map((el) => <Todo deleteItem={props.deleteItem} todo={el} key={el.key} changeItem={props.changeItem} checkItem={props.checkItem}/>);
    }
  } else {
    todoList = '텅텅비었습니다. 그렇게 할일이 없나요..? 그룹을 먼저 만들어주세요 ~ 🙅'
    pastedList = ''
    makeBool = false;
  }

  return (
      <div>
        <div className="todoList">
          {todoList}
        </div>
        <div className="AddTask">
          {makeBool?<AddTask focused={focused} addItem={props.addItem}/>:null}
        </div>
        <div className="pastedList">
          {pastedList}
        </div>
        <div className={"trash-BOx"}>
        </div>
      </div>
  )
};

export default Contents;