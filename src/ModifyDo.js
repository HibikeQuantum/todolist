import React from 'react';

// ==> Todo.js
const InputDo = (props) => {

  const onChangeEvent = (e) => {
    props._saveText(e)
  };

  const EnterEvent = (e) => {
    if (e.key === 'Enter') {
      props._changeItem(props.todo.key, e.target.value);
      props._handleModifyClick();
    }
  };

  const onBlurHandle = (e) => {
    props._changeItem(props.todo.key, e.target.value);
    props._handleModifyClick();
  };

  return (
      <div className="modifiyDo-box">
        <input onBlur={onBlurHandle} onKeyPress={EnterEvent} autoFocus value={props.text} onChange={onChangeEvent}
               className="modifyBox"/>
      </div>
  );
}


export default InputDo;