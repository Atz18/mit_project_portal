// framework related
import React, { useContext, useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";

// components
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import SignUpPage from "./components/SignupPage/";
import BrowseProjects from "./components/BrowseProjects";
import NewProject from "./components/NewProject";
import DevSettings from "./DevSettings";
import NewEOI from "./components/NewEOI";

// utils and constants
import ROUTES from "./utils/routes";

//Contexts
import { ProjectProvider } from "../src/contexts/ProjectContext";
import { EOIProvider } from "../src/contexts/EOIContext";
import { UserContext } from "../src/contexts/UserContext";

let isLogged = true;
let isSignedUp = true;

// camal case
const ContentContainer = styled.div`
  width: 100vw;
  padding: 25px 50px;
`;

function App() {
  const [state, dispatch] = useReducer(devSettingsReducer, intialDevSettings);
  const [user] = useContext(UserContext);

  const handleToggleSettings = (e) => {
    dispatch({
      type: "set_user_type",
      payload: {
        userType: e.target.value,
        username: e.target.value.toUpperCase(),
      },
    });
  };

  return (
    <BrowserRouter>
      {isLogged && (
        /*<Header userType={state.userType} username={state.username} />*/
        <Header />
      )}
      <ContentContainer>
        <Switch>
          <ProjectProvider>
            <Route exact path={ROUTES.SIGN_UP}>
              <SignUpPage />
            </Route>
            <Route exact path={ROUTES.LOG_IN}>
              <LandingPage />
            </Route>
            <Route exact path={ROUTES.DEV_SETTINGS}>
              <DevSettings />
            </Route>
            <Route exact path={ROUTES.PROJECTS}>
              <BrowseProjects />
            </Route>
            <Route exact path={ROUTES.NEW_PROJECT}>
              <NewProject />
            </Route>
            <EOIProvider>
              <Route exact path={ROUTES.NEW_EOI}>
                <NewEOI />
              </Route>
            </EOIProvider>
          </ProjectProvider>
        </Switch>
      </ContentContainer>
    </BrowserRouter>
  );
}

export default App;
