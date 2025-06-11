// App.jsx
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from "./components/Layout/Layout.jsx";
import Main from "./pages/Main/Main.jsx";


const App = () => {
	return (

		<BrowserRouter>
			<Routes>

				<Route
					path="/"
					element={<Layout />}
				>
					<Route
						index
						element={<Main />}
					/>
				</Route>

				{/*<Route path="product/:id" element={<ProductDetailLayout />}>*/}
				{/*  <Route index element={<ProductDetailPage />} />*/}
				{/*</Route>*/}
			</Routes>
		</BrowserRouter>


	);
};

export default App;