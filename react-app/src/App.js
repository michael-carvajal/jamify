import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import LandingPage from "./components/LandingPage";
import Songsheets from "./components/Songsheets";
import SongsheetDetail from "./components/Songsheets/SongsheetDetail";
import UserSongsheets from "./components/User/UserSongsheets";
import PublishSongsheet from "./components/Songsheets/PublishSongsheet";
import AllSetlist from "./components/Tables/Setlists";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
      <div className="main">

        <Sidebar isLoaded={isLoaded} />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route  path="/songsheets">
            <Songsheets />
          </Route>
          <Route  path="/songsheet-detail/:songId">
            <SongsheetDetail />
          </Route>
          <Route  path="/user/songsheets">
            <UserSongsheets />
          </Route>
          <Route  path={`/publish/:sheetId`}>
            <PublishSongsheet type="update" />
          </Route>
          <Route  path="/publish">
            <PublishSongsheet />
          </Route>
          <Route  path="/setlists">
            <AllSetlist />
          </Route>

        </Switch>
      </div>
    </>
  );
}

export default App;
