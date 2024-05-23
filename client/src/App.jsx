import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import { AuthProvider } from "./context/AuthContext";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Layout = lazy(() => import("./pages/Layout"));
const Recipe = lazy(() => import("./pages/Recipe"));
const RecipeDetail = lazy(() => import("./components/RecipeDetail")); // Import RecipeDetail

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Layout />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/login"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Login />
                </Suspense>
              }
            />
            <Route
              path="/signup"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Signup />
                </Suspense>
              }
            />
            <Route
              path="/recipe"
              element={
                <AuthRoute>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Recipe />
                  </Suspense>
                </AuthRoute>
              }
            />
            <Route
              path="/recipe/:id" // New route for recipe details
              element={
                <AuthRoute>
                  <Suspense fallback={<div>Loading...</div>}>
                    <RecipeDetail />
                  </Suspense>
                </AuthRoute>
              }
            />
          </Route>
          <Route path="*" element={<div>Error: Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
