import React from 'react';
import PropTypes from 'prop-types';

const Group = (props) => {

  return (
      <div>
        {props.data.index}번 {props.data.name}
      </div>
  )
};

Group.prototype = {}

export default Group;

//{
//           name: "첫번째 후손",
//           index: 0
//         }