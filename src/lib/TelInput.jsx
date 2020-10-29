import React from 'react'
import GeneralInput from '../structure/GeneralInput.jsx'

function TelInput ({ children, ...attr }) {
  return (
    <GeneralInput type="tel" autocomplete="tel" {...attr}>
      {children}
    </GeneralInput>
  )
}

export default TelInput
