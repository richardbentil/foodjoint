import React from 'react'
import {
	MdFoodBank,
	MdLocalDining,
	MdShoppingCart,
	MdReceipt,
} from "react-icons/md";


//menus: food items, food joints, cart, order
function Footer() {
  return (
		<footer className="footer-bottom w-100 d-lg-none">
			<ul className="nav nav-pills nav-fill bg-white">
				<li className="nav-item">
					<a className="nav-link active" aria-current="page" href="#">
						<MdLocalDining size={20} />
						<div style={{ marginTop: -5 }}>
							<small style={{ fontSize: 10 }}>Dishes</small>
						</div>
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-dark" href="#">
						<MdFoodBank size={20} />
						<div style={{ marginTop: -5 }}>
							<small style={{ fontSize: 10 }}>Vendors</small>
						</div>
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-dark" href="#">
						<MdShoppingCart size={20} />
						<div style={{ marginTop: -5 }}>
							<small style={{ fontSize: 10 }}>Cart</small>
						</div>
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-dark" href="#">
						<MdReceipt size={20} className="mb-0" />
						<div style={{ marginTop: -5 }}>
							<small style={{ fontSize: 10 }}>Orders</small>
						</div>
					</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer