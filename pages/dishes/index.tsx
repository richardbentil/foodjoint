import FoodCard from '@/components/FoodCard'
import React from 'react'
import {foods} from "@/foods.json"

function Dishes() {
  return (
		<>
			<h6 className='mb-1'>Popular dishes</h6>
			<div className="row my-3">
				{foods.map((food) => (
					<div key={food.id} className="col-md-6 col-lg-4 mb-3">
						<FoodCard food={food} />
					</div>
				))}
			</div>
		</>
	);
}

export default Dishes