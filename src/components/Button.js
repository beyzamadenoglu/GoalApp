import React from 'react';

function Button({ text, type }) {
  return (
  <button type={type}>{text}</button>
  )
}

export default Button