import React from 'react';

// ==> AddTask.js
const InputDo = (props) => {
  const onChangeEvent = (e) => {
    props.saveText(e)
  };
  const _EnterEvent = (e) => {
    if (e.key === 'Enter') {
      props.addItem(false, props.group, e.target.value);
      props.clearText();
    }
  };

  if (!props.showing) {
    return null
  } else {
    return (
        <div>
          <input onKeyPress={_EnterEvent} autoFocus value={props.text} onChange={onChangeEvent} className="inputBox"/>
        </div>
    );
  }
}


export default InputDo;