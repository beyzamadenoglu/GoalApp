import React from 'react'

function StatusButton({ children, func }) {
  return (
    <select onChange={func}>
    {children}
    </select>
  )
}

export default StatusButton;