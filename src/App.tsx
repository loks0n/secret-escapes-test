import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout/MainLayout";
import HomePage from "./pages/HomePage";
import SaleDetailsPage from "./pages/SaleDetailsPage";
import SearchResultsPage from "./pages/SearchResultsPage";

import "./styles/index.css";
import "./styles/pico.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchResultsPage />} />
        <Route path="sale/:saleId" element={<SaleDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
