// App.jsx
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';

import Main from './pages/Main/Main.jsx';
import ProductDetail from './components/ProductDetail/ProductDetail.jsx';
import ProductDetailLayout
  from "./components/ProductDetailLayout/ProductDetailLayout.jsx";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage.jsx";
import ProductsListProvider from "./context/ProductsProvider.jsx";

const App = () => {
  return (
    <ProductsListProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
          </Route>

          <Route path="product/:id" element={<ProductDetailLayout />}>
            <Route index element={<ProductDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductsListProvider>

  );
};

export default App;