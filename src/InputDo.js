import React from 'react';

// ==> AddTask.js
const InputDo = (props) => {

  const onChangeEvent = (e) => {
    props._saveText(e)
  };
  const EnterEvent = (e) => {
    if (e.key === 'Enter') {
      props._addItem(false, props.focused, e.target.value);
      props._clearText();
    }
  };
  const onBlur = () => {
    props._showingChange();
  };

  if (!props.showing) {
    return null
  } else {
    return (
        <>
            <input type="text" className="TodoInput" onBlur={onBlur} onKeyPress={EnterEvent} autoFocus value={props.text}
                   onChange={onChangeEvent}
            />
        </>
    );
  }
};


export default InputDo;