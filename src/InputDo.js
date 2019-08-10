import React from 'react';

// ==> AddTask.js
const InputDo = (props) => {
  const onChangeEvent = (e) => {
    props.saveText(e)

  };
  const _EnterEvent = (e) => {
    if (e.key === 'Enter') {
      props.addItem(false, props.focused, e.target.value);
      props.clearText();
    }
  };
  const onBlur = (e) => {
    props.showingChange();
  };

  if (!props.showing) {
    return null
  } else {
    return (
        <div className="InputDo-box">
          <input onBlur={onBlur} onKeyPress={_EnterEvent} autoFocus value={props.text} onChange={onChangeEvent}
                 className="inputBox"/>
        </div>
    );
  }
};


export default InputDo;