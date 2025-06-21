import Header from "../Header/Header.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import {Outlet} from "react-router-dom";
import Information from "../Information/Information.jsx";
import Support from "../Support/Support.jsx";
import Footer from "../Footer/Footer.jsx";
import "../../styles/section_catalog.scss"
import Advertising from "../Advertising/Advertising.jsx";


const LayoutCatalog = () => {
	return (
		<div>
			<Header />
			<NavBar />
			<main>
				<Outlet />
			</main>
			<Advertising />
			<Information />
			<Support />
			<Footer />
		</div>
	)
}
export default LayoutCatalog;