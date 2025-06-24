import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutMain from "./components/Layouts/LayoutMain.jsx";
import Main from "./pages/Main/Main.jsx";
import "./styles/styles.scss";
import Catalog from "./pages/Catalog/Catalog.jsx";
import LayoutCatalog from "./components/Layouts/LayoutCatalog.jsx";
import Products from "./pages/Products/Products.jsx";
import ProductPage from "./pages/Product/ProductPage.jsx";
import { LanguageProvider } from "./context/LanguageContext/LanguageContext.jsx";

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutMain />}>
            <Route index element={<Main />} />
          </Route>
          <Route path="/catalog" element={<LayoutCatalog />}>
            <Route index element={<Catalog />} />
            <Route path=":category" element={<Products />} />
            {/*<Route path=":category/:subcategory" element={<ProductPage />} />*/}
            {/*<Route path=":category/:subcategory/:productId" element={<ProductPage />} />*/}
            <Route path=":category/:productId" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
