import React from 'react';

const Find = (props) => {

  const onChangeEvent = (e) => {
    props._setSearchWord(e.target.value);
  };

  return (
      <div className="FindInputBox">
        <span role="img" className="FindInputIcon">🔎</span>
        <input className="FindInput" onChange={onChangeEvent}/>
      </div>
  );
};
export default Find;