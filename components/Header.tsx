import React from "react";
import { MdPerson, MdNotifications, MdShoppingBasket } from "react-icons/md";
import Search from "./Search";
//menus: notifications, profile
function Header() {
	return (
		<header>
			<ul className="nav justify-content-center shadow-sm bg-white">
				<li className="nav-item mt-1">
					<a className="nav-link text-dark" href="#">
						<h5 className="mb-0">Food joint</h5>
					</a>
				</li>
				<li className="nav-item d-none d-lg-block me-3 mt-2">
					<a className="nav-link px-0 text-dark" href="#">
						Dishes
					</a>
				</li>
				<li className="nav-item d-none d-lg-block me-3 mt-2">
					<a className="nav-link px-0 text-dark" href="#">
						Vendors
					</a>
				</li>
				<li className="nav-item d-none d-lg-block me-3 mt-2">
					<Search />
				</li>
				<li className="nav-item dropdown ms-auto me-1 mt-2">
					<a
						className="nav-link text-dark"
						href="#"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						<MdPerson size={20} />
					</a>
					<ul className="dropdown-menu dropdown-menu-end border-0">
						<li className="d-none d-lg-block ">
							<a className="dropdown-item" href="#">
								Orders
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Profile
							</a>
						</li>
						<li>
							<hr className="dropdown-divider" />
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Logout
							</a>
						</li>
					</ul>
				</li>
				<li className="nav-item d-none d-lg-block mt-2">
					<a className="nav-link text-dark ps-2" href="#">
						<MdShoppingBasket size={20} />
					</a>
				</li>
			</ul>
		</header>
	);
}

export default Header;
