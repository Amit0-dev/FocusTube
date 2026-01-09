import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
};

export default App;
