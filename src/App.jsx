import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home'
import { useSelector } from "react-redux";


function App() {
  const navigate = useNavigate();
  const token = useSelector(state => state.token.value);
  const location = useLocation();

  useEffect(() => {
    if (!token && location.pathname != '/register'){
        navigate('/login')
    }
}, [navigate, token])

  function ProtectedRoute({ children, isAuthentication, redirectTo = '/login' }) {
    if (!isAuthentication) {
      navigate(redirectTo);
    }
    return children;
  }

  return (
    <>
      <div>
        <Routes>
          {/*public */}
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>

          <Route path="*" element={<Error></Error>}></Route>

          {/*protected */}
          <Route path="/" element={<ProtectedRoute isAuthentication={token ? true : false}>
            <Home></Home>
          </ProtectedRoute>}></Route>
        </Routes>
      </div>

    </>
  )
}

export default App
