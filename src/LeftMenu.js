import React from 'react';
import Find from './Find'
import Group from './Group'
import AddGroup from './AddGroup';

const LeftMenu = (props) => {
  const GroupList = props.groups.map((el) => (
      <Group deleteItemByGroup={props.deleteItemByGroup} deleteGroup={props.deleteGroup} focused={props.focused} changeFocus={props.changeFocus} data={el} className="Group-menu" key={el.key}/>
  ));

  return (
      <div className="Sidebar">
        <Find setSearchWord={props.setSearchWord} />
          {GroupList}
        <AddGroup addGroup={props.addGroup} />
      </div>
  );
};
export default LeftMenu;