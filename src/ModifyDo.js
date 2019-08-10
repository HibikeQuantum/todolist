import React from 'react';

// ==> Todo.js
const InputDo = (props) => {

  const onChangeEvent = (e) => {
    props.saveText(e)
  };

  const _EnterEvent = (e) => {
    if (e.key === 'Enter') {
      props.changeItem(props.todo.key, e.target.value);
      props.endModify();
    }
  };

  const _onBlurHandle = (e) => {
    props.changeItem(props.todo.key, e.target.value);
    props.endModify();
  };

  return (
      <div className="modifiyDo-box">
        <input onBlur={_onBlurHandle} onKeyPress={_EnterEvent} autoFocus value={props.text} onChange={onChangeEvent}
               className="modifyBox"/>
      </div>
  );
}


export default InputDo;