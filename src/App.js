import "./App.css";
import Nav from "./components/Nav/Nav";
import Products from "./components/Products/Products";
import { Route, Routes, Navigate } from "react-router-dom";
import AuthForm from "./components/AuthForm/AuthForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from "./redux/User/Userslice";

function App() {
  const dispatch = useDispatch();
  const fetched = useSelector((state) => state.user.fetched);

  useEffect(() => {
    dispatch(isLoggedIn());
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Nav />
      <Routes>
        {!fetched && <Route path="/login" element={<AuthForm />} />}
        {!fetched && <Route path="/signup" element={<AuthForm />} />}
        {fetched && (
          <Route path="/login" element={<Navigate to="/" replace />} />
        )}
        {fetched && (
          <Route path="/signup" element={<Navigate to="/" replace />} />
        )}
        <Route
          path="/404"
          element={<h4 className="text-muted">404 Not Found</h4>}
        />
        <Route path="/:category?" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
