import Header from "../Header/Header.jsx";

import {Outlet} from "react-router-dom";
import NavBar from "../NavBar/NavBar.jsx";


const Layout = () => {
	return (
		<div>
			<Header />
			<NavBar />
			<main>
				<Outlet />
			</main>

		</div>
	)
}
export default Layout;