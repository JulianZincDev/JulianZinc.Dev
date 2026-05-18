import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Landing } from '@/pages/Landing/Landing';
import { ThemeProvider } from 'styled-components';
import { useMemo, useState } from 'react';
import { defaultTheme } from './themes/defaultTheme';

const themeMap = {
  default: defaultTheme,
}

function App() {

  // Should be able to set the theme somewhere, then need saving in localstorage or smth to keep
  // across loads!
  const [theme] = useState<keyof typeof themeMap>('default');
  const currentTheme = useMemo(() => themeMap[theme], [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
