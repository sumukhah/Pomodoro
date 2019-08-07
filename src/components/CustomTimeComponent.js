import React from 'react';

const styles={
  width:'20%',
  position:'absolute',
  top:"65%",
  right:'10%',
}

export const CustomTimeComponent = (props) => {
  return(
    <div className='segment' style={styles}>
      <form className='ui fluid form' onSubmit={props.onCustomFormSubmit}>
        <i className="clock icon"></i>
        <input type='time' onChange={props.FormInputHandler}></input>
      <div className="ui up pointing blue basic label">
        HH:MM format
      </div>
        <button  className='ui active button' onClick={props.onCustomFormSubmit}>Submit</button>
      </form>
    </div>
  );
}