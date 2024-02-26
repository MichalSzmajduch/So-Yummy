import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operations.js";

import Main from "./pages/Main";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import { HomePage } from "./pages/HomePage/HomePage";
import { HeaderPage } from "./pages/Header/Header.jsx";
import SearchPage from "./pages/SearchPage/SearchPage.jsx";
import { AddRecipe } from "./pages/AddRecipe/AddRecipe.jsx";
import FavoritePage from "./pages/FavoritePage/Favorite.jsx";
import { RecipePage } from "./components/RecipePage/RecipePage.jsx";
import ShoppingListPage from "./pages/ShoppingListPage/ShoppingListPage.jsx";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute.jsx";
import { CategoryPage } from "./pages/CategoryPage/CategoryPage.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<HeaderPage />}>
        <Route index element={<HomePage />} />
        <Route
          path="/auth/register"
          element={
            <RestrictedRoute redirectTo="/main" component={<RegisterPage />} />
          }
        />
        <Route
          path="/auth/login"
          element={
            <RestrictedRoute redirectTo="/main" component={<LoginPage />} />
          }
        />
        <Route path="/main" element={<Main />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/recipes/:recipeId" element={<RecipePage />}></Route>

        <Route path="/search" element={<SearchPage />} />
        <Route path="/shopping-list" element={<ShoppingListPage />} />
      </Route>
    </Routes>
  );
}

export default App;
