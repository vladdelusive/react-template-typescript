import React from "react";
import { Route, Switch } from "react-router-dom";
import { MainPage, NotFoundPage } from "pages";

function App() {
  return (
    <>
      <main className="section">
        <Switch>
          <Route path="/" exact component={MainPage} />
          {/* <Route path="/smth" exact component={Smth1} /> */}
          {/* <Route path="/smth/:id" component={Smth2} />  */}
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </>
  );
}

export { App };