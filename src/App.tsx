import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Layout";
import Monolith from "./pages/Monolith";
import Archive from "./pages/Archive";
import Laboratory from "./pages/Laboratory";
import Briefing from "./pages/Briefing";
import Products from "./pages/Products";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Monolith />} />
          <Route path="archive" element={<Archive />} />
          <Route path="laboratory" element={<Laboratory />} />
          <Route path="briefing" element={<Briefing />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
