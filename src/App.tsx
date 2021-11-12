import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Page } from "./components/Page";
import { Navbar } from "./components/Navbar";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  height: 100vh;
`;

function App() {
  return (
    <>
      <StyledMain>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/:id">
              <Page />
            </Route>
          </Switch>
        </Router>
      </StyledMain>
    </>
  );
}

export default App;
