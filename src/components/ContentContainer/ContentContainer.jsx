import React from 'react'
import "./ContentContainer.css"

export default function ContentContainer({children}) {
  return (
    <div className='content-container'>{children}</div>
  )
}
