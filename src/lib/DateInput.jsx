import React from 'react'
import GeneralInput from '../structure/GeneralInput.jsx'

function DateInput ({ children, ...attr }) {
  return (
    <GeneralInput type="date" {...attr}>
      {children}
    </GeneralInput>
  )
}

export default DateInput
