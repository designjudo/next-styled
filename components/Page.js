import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const AppWrapper = styled.div`
  height: 100vh;
  display: grid;
  -ms-grid-rows: 56px 1fr;
  grid-template-rows: 56px 1fr;
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: 'TopNav TopNav' 'Canvas Canvas';
  overflow: hidden;
`

const AppLayout = ({ children }) => {
  return (
    <AppWrapper>
      {children}
    </AppWrapper>
  )
}
AppLayout.propTypes = {
  children: PropTypes.node
}

export default AppLayout
