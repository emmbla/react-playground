import React, { CSSProperties } from 'react'
import { HeartSpinner  } from "react-spinners-kit";
import { centeredContent, fullScreen } from '../css'

export default function() {
  return (
    <div style={{ ...centeredContent, ...fullScreen }}>
       <HeartSpinner size={50} color="#686769" />
    </div>
  )
}

const appearance: CSSProperties = {
  color: 'white',
  fontSize: '1.5em'
}
