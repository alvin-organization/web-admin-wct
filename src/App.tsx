import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/auth/Login";
import { CoreRoutes } from "./router/route";
import HomePage from "./views/home";
import CategoryPage from "./views/category/category";
import AddEditCategoryPage from "./views/category/add-edit-category";
import MoviePage from "./views/movie/movie";
import AddEditMoviePage from "./views/movie/add-edit-movie";
import "./assets/scss/Default.scss";
import "./assets/scss/Landing.scss";
import "./assets/scss/Icons.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path={CoreRoutes.AUTH} element={<Login />}></Route>
          <Route path={CoreRoutes.DASHBOARD} element={<HomePage />}></Route>
          <Route path={CoreRoutes.CATEGORY} element={<CategoryPage />}></Route>
          <Route
            path={`${CoreRoutes.CATEGORY}${CoreRoutes.ADD_EDIT_CATEGORY}`}
            element={<AddEditCategoryPage />}
          ></Route>
          <Route path={CoreRoutes.MOVIE} element={<MoviePage />}></Route>
          <Route
            path={`${CoreRoutes.MOVIE}${CoreRoutes.ADD_EDIT_MOVIE}`}
            element={<AddEditMoviePage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
