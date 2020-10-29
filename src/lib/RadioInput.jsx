import React from 'react'
import GeneralInput from '../structure/GeneralInput.jsx'

function RadioInput ({ id, labelAttr, children, ...attr }) {
  return (
    <GeneralInput type="radio" {...attr}>
      {children}
    </GeneralInput>
  )
}

export default RadioInput
