import AppShell from './Layouts/AppShell';
import { MantineProvider } from '@mantine/core';

import {
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Films from './pages/Films';
import People from './pages/People';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log('TO USE EFFECT', location)
    if (location.hash && location.hash.includes('callback')) {
      console.log('REDIRECTTTT...')
      navigate('/people');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MantineProvider>
        <Routes>
          <Route path="/" element={<AppShell />}>
            <Route path="" element={<Films />} />
            <Route path="films" element={<Films />} />
            <Route path="people" element={<People />} />
          </Route>

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
    </MantineProvider>
  );
}

export default App;
