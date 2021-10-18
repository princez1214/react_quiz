import styled from 'styled-components'

const SidebarContainer = styled.div`
  width: 60px;
  border-right: solid 1px #333;
  height: 100vh;
  background-color: #eee;
  .active {
    border-bottom: solid 2px yellowgreen;
    background-color: #ddd;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
      padding: 10px;
      width: 40px;
      cursor: pointer;
      border-bottom: solid 2px #eee;
    }
    li:hover {
      background-color: #ddd;
    }
  }

  a {
    text-decoration: none;
  }
`

export default SidebarContainer;