import AppShell from './Layouts/AppShell';
import { MantineProvider } from '@mantine/core';

import {
  Routes,
  Route
} from "react-router-dom";

import Films from './pages/Films';
import People from './pages/People';

function App() {
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
