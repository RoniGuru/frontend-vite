import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import { AuthProvider } from './Context/Auth/AuthProvider';
import { ProtectedRoute } from './Context/Auth/ProtectedRoute';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './state/store';
import Game from './pages/Game';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
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
              <Route path="/game" element={<Game />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </AuthProvider>
    </Provider>
  );
}

export default App;
