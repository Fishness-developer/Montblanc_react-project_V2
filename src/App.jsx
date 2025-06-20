import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LayoutMain from "./components/Layouts/LayoutMain.jsx";
import Main from "./pages/Main/Main.jsx";
import './styles/styles.scss'
import Catalog from "./pages/Catalog/Catalog.jsx";
import LayoutCatalog from "./components/Layouts/LayoutCatalog.jsx";
import Products from "./pages/Products/Products.jsx";


const App = () => {
	return (

		<BrowserRouter>
			<Routes>

				<Route path="/" element={<LayoutMain />}>
					<Route index element={<Main />} />
				</Route>


				<Route path="/catalog" element={<LayoutCatalog />}>
					<Route index element={<Catalog />} />
					<Route path=":category" element={<Products />} />
					<Route path=":category/:subcategory" element={<Catalog />} />
				</Route>

			</Routes>
		</BrowserRouter>


)
	;
};

export default App;