import React from 'react';

interface Props {
	height: string;
}

const Header = ({ height }: Props) => {
	return (
		<header className={`flex items-center justify-center ${height}`}>
			<div className='h-16 w-28'>
				<h1 className='text-2xl font-space-mono text-very-dark-cyan opacity-70'>
					S P L I T T E R
				</h1>
			</div>
		</header>
	);
};

export default Header;
