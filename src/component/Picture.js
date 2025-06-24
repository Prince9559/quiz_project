 import React from "react";

function Picture(props) {
  return (
    <div>

      <img src={props.pic}/>

      <p>{props.children}</p>
      
    </div>
  );
}

export default Picture;
