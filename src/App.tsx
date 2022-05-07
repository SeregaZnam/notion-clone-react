import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Page } from "./components/Page";
import { Navbar } from "./components/Navbar";
import { NormalizedStyles } from "./ResetStyles";
import { BaseStyles, IconsClasses, StyledMain } from "./BaseStyles";

function App() {
  console.log("test");
  return (
    <>
      <IconsClasses>
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
        </StyledMain>
      </IconsClasses>
    </>
  );
}

export default App;
