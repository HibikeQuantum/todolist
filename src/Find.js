import React from 'react';

const Find = (props) => {

  const onChangeEvent = (e) => {
    props.setSearchWord(e.target.value);
  };

  return (
      <div className="Find-Box">
        <span role="img" className="Find-Input-ICON">🔎</span>
        <input className="Find-Input-Box" onChange={onChangeEvent}/>
      </div>
  );
};
export default Find;