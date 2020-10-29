import React from 'react'
import General from '@blackblock/react-component-boilerplate'

function SubmitInput ({ children, ...attr }) {
  return <General as={'input'} value={children} type="submit" {...attr}></General>
}

export default SubmitInput
