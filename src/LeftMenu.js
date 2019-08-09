import React from 'react';
import Find from './Find'
import Group from './Group'
import AddGroup from './AddGroup';
import AddTask from './AddTask'

const LeftMenu = (props) => {
  console.log(props)
  const GroupList = props.groups.map((el) => (
      <Group data={el} className="Group-menu" key={el.name +el.index}/>
  ));

  return (
      <div className="Sidebar">
        <Find/>
          {GroupList}
        <AddGroup addGroup={props.addGroup} />
      </div>
  );
}

LeftMenu.propTypes = {

}

export default LeftMenu;