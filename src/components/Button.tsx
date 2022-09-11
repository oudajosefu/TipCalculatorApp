import React from 'react';

export interface Props {
	tipAmount: number;
	handleClick: (tipPercent: number) => void;
}

const Button = ({ tipAmount, handleClick }: Props) => {
	return (
		<label>
			<input
				className='hidden peer'
				type='radio'
				name='tip'
				onClick={() => handleClick(tipAmount / 100)}
			/>
			<div className='flex items-center justify-center h-full text-xl text-white rounded-md bg-very-dark-cyan font-space-mono peer-checked:bg-strong-cyan dark:peer-checked:bg-teal-600 peer-checked:bg-opacity-50 peer-hover:bg-[#92DFD5] dark:peer-hover:bg-teal-600 peer-hover:text-very-dark-cyan peer-checked:text-very-dark-cyan dark:text-grayish-cyan-100 dark:text-opacity-80'>
				{tipAmount}%
			</div>
		</label>
	);
};

export default Button;
