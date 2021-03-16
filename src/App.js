import React, { useState } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Backdrop from "./components/Backdrop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Sidebar from "./components/Sidebar";
import Divider from "./components/Elements/Divider";
import Button from "./components/Elements/Button";
import Header from "./components/Elements/Header";
import Image from "./components/Elements/Image";
import Input from "./components/Elements/Input";
import List from "./components/Elements/List";
import Loader from "./components/Elements/Loader";
import Form from "./components/Collections/Form";
import Alert from "./components/Collections/Alert";
import Grid from "./components/Collections/Grid";
import Navbar from "./components/Collections/Navbar";
import Table from "./components/Collections/Table";
import Card from "./components/Views/Card";
function App() {
  const [open_drawer, setOpenDrawer] = useState(false);
  return (
    <>
      <div className="main">
        <Router>
          {!open_drawer && (
            <>
              <Sidebar show={open_drawer} />
            </>
          )}
          {open_drawer && (
            <>
              <Sidebar show={open_drawer} />
              <Backdrop setOpenDrawer={setOpenDrawer} show={open_drawer} />
            </>
          )}
          {/* <Sidebar /> */}
          <div className="content">
            <AppNavbar setOpenDrawer={setOpenDrawer} show={open_drawer} />
            <div className="route-comp">
              <Switch>
                <Route path="/buttons">
                  <Button />
                </Route>
                <Route path="/dividers">
                  <Divider />
                </Route>
                <Route path="/headers">
                  <Header />
                </Route>
                <Route path="/images">
                  <Image />
                </Route>
                <Route path="/inputs">
                  <Input />
                </Route>
                <Route path="/lists">
                  <List />
                </Route>
                <Route path="/loaders">
                  <Loader />
                </Route>
                <Route path="/forms">
                  <Form />
                </Route>
                <Route path="/alerts">
                  <Alert />
                </Route>
                <Route path="/grids">
                  <Grid />
                </Route>
                <Route path="/navbars">
                  <Navbar />
                </Route>
                <Route path="/tables">
                  <Table />
                </Route>
                <Route path="/cards">
                  <Card />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
