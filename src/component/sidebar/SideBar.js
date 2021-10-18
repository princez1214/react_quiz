import React, { useEffect } from 'react';
import SidebarContainer from './SideBar.style';
import { useHistory, useLocation } from "react-router-dom";

 const SideBar = () => {
  const history = useHistory();
  const location = useLocation();
  let pathname = location.pathname;
  const problems = ['/problem1', '/problem2', '/problem3', '/problem4', '/problem5']

  useEffect(() => {
    history.push("/problem1")
  }, [history])

  return <SidebarContainer>
    <ul>
      {problems.map((problem, index) => 
        <li 
          key={index} 
          className={pathname === problem ? 'active': ''}
          onClick={() => history.push(problem)}
        >
          {index + 1}
        </li>
      )}
    </ul>
  </SidebarContainer>
}

export default SideBar;
