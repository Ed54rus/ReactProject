import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
	<ContentLoader
		className='pizza-block'
		speed={2}
		width={280}
		height={465}
		viewBox='0 0 280 465'
		backgroundColor='#cfc9c9'
		foregroundColor='#ecebeb'>
		<circle cx='140' cy='140' r='120' />
		<rect x='0' y='325' rx='5' ry='5' width='280' height='90' />
		<rect x='0' y='290' rx='5' ry='5' width='280' height='25' />
		<rect x='0' y='430' rx='5' ry='5' width='100' height='30' />
		<rect x='150' y='425' rx='20' ry='20' width='130' height='40' />
	</ContentLoader>
);

export default Skeleton;
