import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import { AuthProvider } from './Context/Auth/AuthProvider';
import { ProtectedRoute } from './Context/Auth/ProtectedRoute';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './state/store';
import Game from './pages/Game';
import { Provider } from 'react-redux';
import RootLayout from './hoc/layout';

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
                    <RootLayout>
                      <Home />
                    </RootLayout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/game"
                element={
                  <ProtectedRoute>
                    <RootLayout>
                      <Game />
                    </RootLayout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/auth"
                element={
                  <RootLayout hideNav={true}>
                    <Auth />
                  </RootLayout>
                }
              />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </AuthProvider>
    </Provider>
  );
}

export default App;
