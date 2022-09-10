import React, { useState } from 'react';
import Button from './Button';

interface Props {
	tipPercent: number;
	customChecked: boolean;
	setTipPercent: (tipPercent: number) => void;
	setCustomChecked: (customChecked: boolean) => void;
}

const Tips = ({ tipPercent, customChecked, setTipPercent, setCustomChecked }: Props) => {
	// Goal: if custom value is used (value is not empty string or ), deselect radio group (set all unchecked?),
	//  else if any button is selected in radio group, set custom value to empty string
	const tipAmounts = [5, 10, 15, 20, 25];

	return (
		<section>
			<h1 className='font-space-mono text-very-dark-cyan opacity-70'>
				Select Tip %
			</h1>
			<div className='grid grid-cols-2 grid-rows-3 gap-4 mt-2 h-44 lg:h-28 lg:grid-cols-3 lg:grid-rows-2'>
				{tipAmounts.map((tip) => (
					<Button key={tip} tipAmount={tip} handleClick={(tipPercent: number) => {
						setCustomChecked(false);
						setTipPercent(tipPercent);
					}} />
				))}
				<input
					className='p-5 text-xl text-right rounded-md lg:placeholder:text-2xl 2xl:placeholder:text-xl bg-grayish-cyan-100 placeholder:text-very-dark-cyan placeholder:opacity-70 placeholder:font-space-mono text-very-dark-cyan font-space-mono focus:outline-2 focus:outline-strong-cyan lg:p-3'
					type='number'
					placeholder='Custom'
					value={![0, ...tipAmounts].includes(tipPercent * 100) ? tipPercent * 100 : ''}
					onChange={(event) =>
						event.target.value
							? setTipPercent(
								parseFloat(event.target.value) / 100
							)
							: setTipPercent(0)
					}
					onClick={(event) => {
						const target = event.target as HTMLInputElement;
						setCustomChecked(true);
						setTipPercent(
							target.value ? parseFloat(target.value) / 100 : 0
						);
						target.select();
					}}
					onBlur={() => setCustomChecked(false)}
				/>
				<input
					className='hidden'
					type='radio'
					name='tip'
					checked={customChecked}
				/>
			</div>
		</section>
	);
};

export default Tips;
