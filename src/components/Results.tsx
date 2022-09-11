import React from 'react';

interface Props {
	tip: number;
	total: number;
	people: number;
	resetState: string;
	handleClick: {
		setBill: (bill: number) => void;
		setTipPercent: (tipPercent: number) => void;
		setCustomChecked: (customChecked: boolean) => void;
		setPeople: (people: number) => void;
		setResetState: (resetState: string) => void;
	};
}

const Results = ({
	tip,
	total,
	people,
	resetState,
	handleClick: { setBill, setTipPercent, setCustomChecked, setPeople, setResetState },
}: Props) => {
	return (
		<div className='flex flex-col justify-between md:min-h-[30vh] gap-2 xl:gap-6 p-5 lg:p-11 bg-very-dark-cyan rounded-2xl lg:w-full dark:text-grayish-cyan-100'>
			<div className='flex flex-col flex-grow gap-3 justify-evenly lg:justify-start xl:gap-11'>
				<section className='flex justify-between text-white dark:text-grayish-cyan-100 lg:flex-col xl:flex-row font-space-mono'>
					<div>
						<h1 className='opacity-80'>Tip Amount</h1>
						<p className='text-xs text-grayish-cyan-300'>
							/ person
						</p>
					</div>
					<p className='text-3xl lg:text-4xl xl:text-5xl text-strong-cyan dark:opacity-70'>
						${(tip / people).toFixed(2)}
					</p>
				</section>
				<section className='flex justify-between text-white lg:flex-col xl:flex-row font-space-mono dark:text-grayish-cyan-100'>
					<div>
						<h1 className='opacity-80'>Total</h1>
						<p className='text-xs text-grayish-cyan-300'>
							/ person
						</p>
					</div>
					<p className='text-3xl lg:text-4xl xl:text-5xl text-strong-cyan dark:opacity-70'>
						${(total / people).toFixed(2)}
					</p>
				</section>
			</div>
			<button
				className={`text-xl rounded-md ${resetState} h-11 bg-strong-cyan dark:bg-opacity-50 font-space-mono text-very-dark-cyan dark:text-grayish-cyan-100  hover:opacity-50 dark:text-opacity-80`}
				onClick={() => {
					setBill(0);
					setTipPercent(0);
					setCustomChecked(true);
					setPeople(1);
					setResetState('opacity-50 cursor-not-allowed');
				}}>
				RESET
			</button>
		</div>
	);
};

export default Results;
