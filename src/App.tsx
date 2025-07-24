import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import { AuthProvider } from './Context/Auth/AuthProvider';
import { ProtectedRoute } from './Context/Auth/ProtectedRoute';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './state/store';

function App() {
  return (
    <AuthProvider>
      <PersistGate persistor={persistor}>
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
      </PersistGate>
    </AuthProvider>
  );
}

export default App;
