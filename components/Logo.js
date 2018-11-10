import React from 'react'
import styled from 'styled-components'
import Connect from '../static/logo.svg'

const SLogo = styled(Connect)`
  height: 56px;
  display: block;
  width: auto;
  padding: 16px;
  margin: auto;
`

const Logo = () => {
  return <SLogo />
}

export default Logo
