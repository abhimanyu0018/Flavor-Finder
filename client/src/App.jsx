import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Layout = lazy(() => import("./pages/Layout"));
const Recipe = lazy(() => import("./pages/Recipe"));

function App() {
  return (
    <>
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
                <Suspense fallback={<div>Loading...</div>}>
                  <Recipe />
                </Suspense>
              }
            />
          </Route>

          <Route path="*" element={<div>error</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
