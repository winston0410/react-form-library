import React from 'react'
import GeneralInput from '../structure/GeneralInput.jsx'

function TextInput ({ children, ...attr }) {
  return (
    <GeneralInput type="text" name="name" id="name" {...attr}>
      {children}
    </GeneralInput>
  )
}

export default TextInput
