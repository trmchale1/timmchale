import React from 'react';

function Image() {
  return (
    <div >
    <p>Did we render something?</p>
    
    <img className="profile-photo" src={require("./images/funny-cat-flying.jpg")} alt={""} width="1800" height="750"/>
    </div>
    );
}

export default Image;