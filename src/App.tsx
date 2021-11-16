import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Page } from "./components/Page";
import { Navbar } from "./components/Navbar";
import styled from "styled-components";
import { NormalizedStyles } from "./ResetStyles";
import { BaseStyles } from "./BaseStyles";
import { ContextMenu } from "./components/ContextMenu";

const StyledMain = styled.main`
  position: relative;
  display: flex;
  height: 100vh;
`;

function App() {
  return (
    <>
      <NormalizedStyles />
      <BaseStyles />
      <StyledMain>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <p>Not page</p>
            </Route>
            <Route path="/:id">
              <Page />
            </Route>
          </Switch>
        </Router>
        <ContextMenu />
      </StyledMain>
    </>
  );
}

export default App;
