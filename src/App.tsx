import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Monolith from "./pages/Monolith";
import Archive from "./pages/Archive";
import Laboratory from "./pages/Laboratory";
import Briefing from "./pages/Briefing";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
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
