import NavBar from "./Components/NavBar";
import NaayabSports from "./Components/NaayabSports";
import AllBusinesses from "./Components/AllBusinesses";
import AddBusinesses from "./Components/AddBusinesses";
import EditBusiness from "./Components/EditBusiness";
import NotFound from "./Components/NotFound";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={NaayabSports} />
        <Route exact path="/all" component={AllBusinesses} />
        <Route exact path="/edit/:id" component={EditBusiness} />
        <Route exact path="/add" component={AddBusinesses} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
