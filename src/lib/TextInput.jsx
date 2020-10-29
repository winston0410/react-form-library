import React from 'react'
import GeneralInput from '../structure/GeneralInput.jsx'

function TextInput ({ children, ...attr }) {
  return (
    <GeneralInput type="text" {...attr}>
      {children}
    </GeneralInput>
  )
}

export default TextInput
