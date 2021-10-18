import React from 'react'
import styled from 'styled-components'

const SolutionContaienr = styled.div`
  padding: 20px;
  text-align: left;
  width: 100%;

  p {
    margin: 0;
  }
`

const Solution = (props) => {
  return <SolutionContaienr>
    {props.children}
  </SolutionContaienr>
}

export default Solution;