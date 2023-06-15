import { Routes, Route } from "react-router-dom";
import HeaderLayoutContainer from "./components/layout/header/HeaderLayoutContainer";
import FooterLayoutContainer from "./components/layout/footer/FooterLayoutContainer";
import MovieDetailContainer from "./components/pages/movieDetail/MovieDetailContainer";
import Home from "./components/pages/home/Home";
import LoginContainer from "./components/pages/login/LoginContainer";
import CategoriesSectionContainer from "./components/pages/categoriesSection/CategoriesSectionContainer";
import AdminPanelContainer from "./components/pages/adminPanel/AdminPanelContainer";
import PrivateRoute from "./PrivateRoute";
import AddUserContainer from "./components/pages/addUser/AddUserContainer";
import EmailVerifyContainer from "./components/pages/emailVerify/EmailVerifyContainer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<HeaderLayoutContainer />}>
        <Route element={<FooterLayoutContainer />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/details" element={<MovieDetailContainer />} />
          <Route path="/details/:id" element={<MovieDetailContainer />} />
          <Route path="/register" element={<AddUserContainer />} />
          <Route path="/verify" element={<EmailVerifyContainer />} />
          <Route
            path="/category/:category_id"
            element={<CategoriesSectionContainer />}
          />
          <Route element={<PrivateRoute />}>
            <Route path="/admin" element={<AdminPanelContainer />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
