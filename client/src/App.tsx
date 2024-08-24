import { Box, createTheme, CssBaseline } from "@mui/material"
import { themeSettings } from "./theme"
import { useMemo } from "react";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./scenes/navbar/index";
import Dashboard from "./scenes/dashboard/index";

function App() {
const theme = useMemo(() =>  createTheme(themeSettings),[]);

  return (
    <>
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width='100%' height = '100%' padding = '1rem 2rem 4rem 2rem' >
          <NavBar />
<Routes>
  <Route path = "/" element = {<div><Dashboard /></div>} />
  <Route path = "/prediction" element = {<div>Predictions page</div>} />
</Routes>
        </Box>
      </ThemeProvider>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
