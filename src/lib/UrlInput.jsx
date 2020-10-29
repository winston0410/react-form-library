import React from 'react'
import GeneralInput from '../structure/GeneralInput.jsx'

function UrlInput ({ children, ...attr }) {
  return (
    <GeneralInput type="url" {...attr}>
      {children}
    </GeneralInput>
  )
}

export default UrlInput
