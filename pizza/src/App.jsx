import './scss/app.scss';

import Header from './components/Header';
import Sort from './components/Sort';
import Categories from './components/Categories';
import PizzaBlock from './components/PizzaBlock';

function App() {
	return (
		<div className='App'>
			<div class='wrapper'>
				<Header />
				<div class='content'>
					<div class='container'>
						<div class='content__top'>
							<Categories />
							<Sort />
						</div>
						<h2 class='content__title'>Все пиццы</h2>
						<div class='content__items'>
							<PizzaBlock title='Мексиканская' price={350} />
							<PizzaBlock title='Итальянская' price={400} />
							<PizzaBlock title='Делюкс' price={430} />
							<PizzaBlock title='Мясная' price={600} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
