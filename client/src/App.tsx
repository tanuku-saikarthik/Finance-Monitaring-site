import { Box, createTheme, CssBaseline } from "@mui/material";
import { themeSettings } from "./theme";
import { useMemo } from "react";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./scenes/navbar/index";
import Dashboard from "./scenes/dashboard/index";
import Register from "./scenes/register/Register";
import Login from "./scenes/login/Login";
import Add from "./scenes/Add/add";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <NavBar />
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/prediction" element={<div>Predictions page</div>} />
              <Route path="/add" element={<Add />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
