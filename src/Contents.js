import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import AddTask from './AddTask'
import PastedTodo from "./PastedTodo";

const Contents = (props) => {
  console.log(props, "왜?")
  const focused = props.focused;

  let todoList = [];
  let pastedList = [];
  if (props.todos.length) {
    props.todos.forEach((el) => {
      if (el.check) {
        todoList.push(el)
      } else {
        pastedList.push(el)
      }
    });
    if (todoList.length) {
      todoList = todoList.map((el) => <Todo todo={el} key={el.group + el.txt}/>);
    }
    if (pastedList.length) {
      pastedList = pastedList.map((el) => <Todo todo={el} key={el.group + el.txt}/>);
    }
  }
  //포커스 처리

  //검색 모드에선 el을 한번 더 검사해서 통과한것만 렌더링하게 구현한다.
  return (
      <div>
        {todoList}
        <AddTask focused={focused} addItem={props.addItem}/>
        {pastedList}
      </div>
  )
};

export default Contents;

// {
//   check: false,
//       group: 0,
//     txt: "cat is good"
// },