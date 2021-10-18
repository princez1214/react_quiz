import React from 'react'
import styled  from 'styled-components';

const ProblemContainer = styled.div`
  padding: 20px;
  text-align: left;
  width: 100%;
  min-height: 93vh;
  border-right: solid 2px #eee;
  p {
    margin: 0;
  }
`

const Problem = (props) => {
  return <ProblemContainer>
    {props.children}
  </ProblemContainer>
}

export default Problem;