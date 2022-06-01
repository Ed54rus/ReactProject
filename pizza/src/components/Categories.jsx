import { useState } from 'react';

function Categories() {
	const [activeIndex, setActiveIndex] = useState(0);

	const categories = [
		'Все',
		'Мясные',
		'Вегетарианские',
		'Гриль',
		'Острые',
		'Закрытые',
	];


	return (
		<div className='categories'>
			<ul>
				{categories.map((value, id) => (
					<li
						onClick={() => setActiveIndex(id)}
						className={activeIndex === id ? 'active' : ''}
						key={id}>
						{value}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Categories;
