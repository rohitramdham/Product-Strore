import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import NavBar from "./components/NavBar.jsx";
import { useColorModeValue } from "@chakra-ui/react";
function App() {
  return (
    <>
      <Box minH="100vh" bg={useColorModeValue("gray.300", "gray.900")}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
