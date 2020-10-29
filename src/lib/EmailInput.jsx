import React from 'react'
import GeneralInput from '../structure/GeneralInput.jsx'

function EmailInput ({ children, ...attr }) {
  return (
    <GeneralInput type="email" autocomplete="email" {...attr}>
      {children}
    </GeneralInput>
  )
}

export default EmailInput
