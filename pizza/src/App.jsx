import React from 'react';

import './scss/app.scss';
import Header from './components/Header';
import Sort from './components/Sort';
import Categories from './components/Categories';
import PizzaBlock from './components/PizzaBlock/';
import Skeleton from './components/PizzaBlock/Skeleton';

const url = 'https://6297594314e756fe3b2def05.mockapi.io/items';

function App() {
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(arr => {
				setItems(arr);
				setIsLoading(false);
			});
	}, []);

	return (
		<div className='App'>
			<div className='wrapper'>
				<Header />
				<div className='content'>
					<div className='container'>
						<div className='content__top'>
							<Categories />
							<Sort />
						</div>
						<h2 className='content__title'>Все пиццы</h2>
						<div className='content__items'>
							{isLoading
								? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
								: items.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
