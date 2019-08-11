import React from 'react';

// ==> AddGroup.js
const InputGroup = (props) => {
  const onChangeEvent = (e) => {
    props._saveText(e)
  };
  const _EnterEvent = (e) => {
    if (e.key === 'Enter') {
      props._addGroup(e.target.value);
      props._clearText();
    }
  };
  const onBlur = (e) => {
    props._showingChange();
  };

  if (!props.showing) {
    return null
  } else {
    return (
        <div className="InputGroup-Box">
          <input onBlur={onBlur} onKeyPress={_EnterEvent} autoFocus value={props.text} onChange={onChangeEvent} className="inputBox"/>
        </div>
    );
  }
}


export default InputGroup;