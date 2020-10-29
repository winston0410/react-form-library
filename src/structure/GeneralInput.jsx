import React from 'react'
// import General from '@blackblock/react-component-boilerplate'
import {
  defaultWhenEmpty
} from '@blackblock/common-utilities'

function GeneralInput ({ id, label, placeholder, children, labelAttr, ...attr }) {
  const ariaLabelValue = defaultWhenEmpty(attr.label)(attr.placeholder)

  return (
    <label for={id} {...labelAttr}>
      {attr.label}
      <input id={id} autocomplete="on" aria-label={ariaLabelValue} {...attr} />
      {children}
    </label>
  )
}

export default GeneralInput
