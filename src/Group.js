import React from 'react';
// ==> leftMenu
const Group = (props) => {

  const changeFocus = () => {
    props.changeFocus(props.data.index);
  };

  const deleteGroup = () => {
    props.deleteGroup(props.data.key);
    props.deleteItemByGroup(props.data.index);
  };


  let status = "";
  if (props.focused === props.data.index) {
    status = "✅";
  } else {
    status = "○";
  }


  return (
      <div draggable={true} onDragEnd={deleteGroup} className="group-box" onClick={changeFocus}>
        {status} {props.data.name}
      </div>
  )
};

Group.prototype = {}

export default Group;