import React from 'react';

interface Props {
	height: string;
}

const Header = ({ height }: Props) => {
	return (
		<header className={`flex items-center justify-center ${height}`}>
			<div className='md:h-16 md:w-28'>
				<h1 className='text-2xl font-space-mono text-very-dark-cyan dark:text-grayish-cyan-100 dark:text-gray-50 opacity-70'>
					S P L I T T E R
				</h1>
			</div>
		</header>
	);
};

export default Header;
