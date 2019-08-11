import React from 'react';
import Find from './Find'
import Group from './Group'
import AddGroup from './AddGroup';

const LeftMenu = (props) => {
  const GroupList = props.groups.map((el) => (
      <Group _deleteItemByGroup={props._deleteItemByGroup} _deleteGroup={props._deleteGroup} focused={props.focused}
             _changeFocus={props._changeFocus} data={el} className="Group-menu" key={el.key}/>
  ));

  return (
      <div className="Sidebar">
        <Find _setSearchWord={props._setSearchWord}/>
        <>
          {GroupList}
        </>
        <AddGroup _addGroup={props._addGroup}/>
      </div>
  );
};
export default LeftMenu;