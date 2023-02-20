import Image from 'next/image'
import React from 'react'
import {MdAccessTime} from "react-icons/md"

type FoodProps = {
	food: {
		name: string;
		img: string;
		restaurant: {
      name: string;
      openingtime: string
		};
	};
};

function FoodCard({food}: FoodProps) {
  return (
		<>
			<div className="card border-0 food-card">
				<div className="card-body d-flex justify-content-start align-items-top">
					<div className="me-2">
						<div
							style={{ width: 90, height: 90 }}
							className="position-relative rounded-3">
							<Image src={food?.img} alt="food-item" fill className='card-img' />

							<div className="position-absolute bg-dark bg-opacity-50 w-100 h-100 d-flex justify-content-center align-items-center rounded-3">
								<span className="badge rounded-pill text-bg-light bg-light text-danger">
									Closed
								</span>
							</div>
						</div>
					</div>
					<div>
						<h6 className="card-title mb-0"> {food?.name}</h6>
						<p className="text-muted card-text mb-0">
							{food?.restaurant?.name}
						</p>

						<h6 className="mb-0">
							<span className="text-muted me-1">Ghc</span>
							<span className="text-primary">25.00</span>
						</h6>
						<p className="text-muted card-text mb-0 d-flex align-items-center mb-0 card-time">
							<span>opens @</span>
							<span>{food?.restaurant?.openingtime}</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default FoodCard