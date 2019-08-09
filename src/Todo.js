import React from 'react';
import PropTypes from 'prop-types';
import CheckPoint from './CheckPoint';

const Todo = (props) => {

  const color = props.todo.check ? "orange" : "red";
  const tempStyle = {background: color};

  const _onChangeEvent = (e) => {
    console.log("클릭됨");
    console.log(e.target.checked)
  };

  return (
      <div>
        <input checked={props.todo.check} onChange={_onChangeEvent} type="checkbox" className=" CheckBox" style={tempStyle}/>
        <div className=" Todos-txt">{props.todo.txt}</div>
      </div>
  )
};

Todo.propTypes = {
  check: PropTypes.bool,
  txt: PropTypes.string
};

export default Todo;