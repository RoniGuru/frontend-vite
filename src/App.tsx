import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import { AuthProvider } from './components/Auth/context/AuthProvider';
import { ProtectedRoute } from './components/Auth/context/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
