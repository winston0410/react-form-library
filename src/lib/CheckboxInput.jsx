import React from 'react'
import GeneralInput from '../structure/GeneralInput.jsx'

function CheckboxInput ({ id, labelAttr, children, ...attr }) {
  return (
    <GeneralInput type="checkbox" {...attr}>
      {children}
    </GeneralInput>
  )
}

export default CheckboxInput
