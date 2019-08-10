import React from 'react';

// ==> AddGroup.js
const InputGroup = (props) => {
  const onChangeEvent = (e) => {
    props.saveText(e)
  };
  const _EnterEvent = (e) => {
    if (e.key === 'Enter') {
      props.addGroup(e.target.value);
      props.clearText();
    }
  };

  if (!props.showing) {
    return null
  } else {
    return (
        <div className="InputGroup-Box">
          <input onKeyPress={_EnterEvent} autoFocus value={props.text} onChange={onChangeEvent} className="inputBox"/>
        </div>
    );
  }
}


export default InputGroup;