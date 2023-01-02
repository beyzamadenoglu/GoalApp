import React from 'react'

function StatusButton({ children, func }) {
  return (
    <div id="filter">
      <select onChange={func}>
        {children}
      </select>
    </div>

  )
}

export default StatusButton;