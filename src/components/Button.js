import React from 'react';

function Button({ text, type, func}) {
  return (
    <>
    <button type={type} onClick={func}>{text}</button>
    </>
  
  )
}

export default Button;