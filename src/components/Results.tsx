import React from 'react';

interface Props {
	tip: number;
	total: number;
	people: number;
	resetState: string;
	handleClick: {
		setBill: (bill: number) => void;
		setPeople: (people: number) => void;
	};
}

const Results = ({
	tip,
	total,
	people,
	resetState,
	handleClick: { setBill, setPeople },
}: Props) => {
	return (
		<div className='flex flex-col justify-between md:min-h-[30vh] gap-2 xl:gap-6 p-5 lg:p-11 bg-very-dark-cyan rounded-2xl lg:w-full'>
			<div className='flex flex-col flex-grow gap-3 justify-evenly lg:justify-start xl:gap-11'>
				<section className='flex justify-between text-white lg:flex-col xl:flex-row font-space-mono'>
					<div>
						<h1>Tip Amount</h1>
						<p className='text-xs text-grayish-cyan-300'>
							/ person
						</p>
					</div>
					<p className='text-3xl lg:text-4xl xl:text-5xl text-strong-cyan'>
						${(tip / people).toFixed(2)}
					</p>
				</section>
				<section className='flex justify-between text-white lg:flex-col xl:flex-row font-space-mono'>
					<div>
						<h1>Total</h1>
						<p className='text-xs text-grayish-cyan-300'>
							/ person
						</p>
					</div>
					<p className='text-3xl lg:text-4xl xl:text-5xl text-strong-cyan'>
						${(total / people).toFixed(2)}
					</p>
				</section>
			</div>
			<button
				className={`text-xl rounded-md ${resetState} h-11 bg-strong-cyan font-space-mono text-very-dark-cyan  active:bg-[#92DFD5] hover:bg-[#92DFD5]`}
				onClick={() => {
					setBill(0);
					setPeople(1);
				}}>
				RESET
			</button>
		</div>
	);
};

export default Results;
