import React from "react";


function Card(props){
	
  return(<div className = "division">
       <h2 className = "heading2">{props.emoji}</h2>
        <p className = "para1">{props.boldtext}</p>
        <p className = "para">{props.smtext}</p>

  </div>
  );
}

export default Card;