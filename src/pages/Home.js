import React from 'react';
import HomeContainer, { ContentContainer } from './Home.style';
import SideBar from '../component/sidebar/SideBar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import Problem1 from './problem1/problem1';
import Problem2 from './problem2/problem2';
import Problem3 from './problem3/problem3';
import Problem4 from './problem4/problem4';
import Problem5 from './problem5/problem5';


function Home() {
  const history = useHistory();

  return (
    <HomeContainer history={history}>
      <Router>
        <SideBar />
        <ContentContainer>
          <Switch>
            <Route exact path="/problem1">
              <Problem1 />
            </Route>
            <Route path="/problem2">
              <Problem2 />
            </Route>
            <Route path="/problem3">
              <Problem3 />
            </Route>
            <Route path="/problem4">
              <Problem4 />
            </Route>
            <Route path="/problem5">
              <Problem5 />
            </Route>
          </Switch>
        </ContentContainer>
      </Router>

    </HomeContainer>
  );
}
  
export default Home;