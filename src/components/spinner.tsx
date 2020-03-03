import React, { CSSProperties } from 'react'
import { HashLoader } from 'react-spinners'
import { centeredContent, fullScreen } from '../css'

export default function() {
  return (
    <div style={{ ...centeredContent, ...fullScreen }}>
      <HashLoader color='white' size={1.5} />
    </div>
  )
}

const appearance: CSSProperties = {
  color: 'white',
  fontSize: '1.5em'
}
