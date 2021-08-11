import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//header
import Header from "../components/Nav-Bar";

// pages

import ExponseDashboaedPage from "../components/Exponse-Dashbord";
import ExponseDashboaedPageCreate from "../components/Create-expense";
import ExponseDashboaedEditPage from "../components/Edit-exponse";
import HelpPage from "../components/Help";
import ErrorPage from "../components/Not-found";

const AppRouter = () => (
  <BrowserRouter>
    <div className="">
      <Header></Header>
      <Switch>
        <Route path="/" component={ExponseDashboaedPage} exact={true} />
        <Route
          path="/create"
          component={ExponseDashboaedPageCreate}
          exact={true}
        />
        <Route path="/edit/:id" component={ExponseDashboaedEditPage} exact={true} />
        <Route path="/help" component={HelpPage} exact={true} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
