import React from 'react';

function Button({ text, type, func, color}) {
  return (
    <>
    <button style={{backgroundColor: color}} type={type} onClick={func}>{text}</button>
    </>
  
  )
}

export default Button;