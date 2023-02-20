import React from "react";
import { MdPerson, MdNotifications } from "react-icons/md";
//menus: notifications, profile
function Header() {
	return (
		<header>
			<ul className="nav justify-content-center shadow-sm bg-white py-1">
				<li className="nav-item me-auto">
					<a className="nav-link text-dark" href="#">
						<h5 className="mb-0">Food joint</h5>
					</a>
				</li>
				<li className="nav-item dropdown d-none d-lg-block ms-auto">
					<a
						className="nav-link dropdown-toggle text-dark"
						href="#"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Menu
					</a>
					<ul className="dropdown-menu dropdown-menu-end ">
						<li>
							<a className="dropdown-item" href="#">
								Dishes
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Vendors
							</a>
						</li>
						<li>
							<hr className="dropdown-divider" />
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Cart
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Orders
							</a>
						</li>
					</ul>
				</li>

				<li className="nav-item ms-auto ms-md-0 me-1">
					<a className="nav-link px-0 text-dark" href="#">
						<MdNotifications size={20} />
					</a>
				</li>
				<li className="nav-item dropdown">
					<a
						className="nav-link text-dark"
						href="#"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						<MdPerson size={20} />
					</a>
					<ul className="dropdown-menu dropdown-menu-end border-0">
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
			</ul>
		</header>
	);
}

export default Header;
