import React from 'react';

const styles = {
    position: 'absolute',
    left: "22%",
    top: '85%',
    width: '54.8%',
    background: 'grey'
}

export const Navbar = (props) => {

  const StandardTimer = props.standardTime.map((time) => {

    return (
      <div className="ui big buttons" key={time}>
        <button className="ui button"  onClick={(e) => props.clickHandler(e,time)}>{time}</button>
      </div>
    )})

    return(
        <div className='segment' style={styles}>
          <button className="positive ui big button" style={{float:"right"}} onClick={props.customTime}>Add Custom Timer</button>
                {StandardTimer}
                
        </div>
    );
}

