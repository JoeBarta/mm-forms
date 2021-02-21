import "./styles.css";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./shared/Header";
import HomePage from "./pages/home";
import MerchantListPage from "./pages/merchant-list";
import LoginPage from "./pages/login/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/merchant-list">
        <MerchantListPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </BrowserRouter>
  );
};

export default App;
