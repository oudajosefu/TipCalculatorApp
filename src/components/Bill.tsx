import React from 'react';

interface Props {
	setBill: (bill: number) => void;
	setResetState: (resetState: string) => void;
}

const Bill = ({ setBill, setResetState }: Props) => {
	return (
		<section>
			<h1 className='font-space-mono text-very-dark-cyan opacity-70'>
				Bill
			</h1>
			<label className='relative flex h-12 p-4 mt-2 overflow-visible rounded-md bg-grayish-cyan-100 font-space-mono focus-within:outline focus-within:outline-strong-cyan focus-within:outline-2'>
				<img src='/icon-dollar.svg' alt='icon-dollar' />
				<input
					className='absolute w-3/4 text-xl text-right focus:outline-none bg-grayish-cyan-100 text-very-dark-cyan right-5 top-2.5'
					type='text'
					name='bill'
					onChange={(event) => {
						if (event.target.value) {
							setBill(parseFloat(event.target.value));
							setResetState('');
						} else setBill(0);
					}}
					onClick={(event) => {
						const target = event.target as HTMLInputElement;
						setBill(target.value ? parseFloat(target.value) : 0);
						target.select();
					}}
				/>
			</label>
		</section>
	);
};

export default Bill;
