import React from 'react';

interface Props {
	people: number;
	setPeople: (people: number) => void;
	setResetState: (resetState: string) => void;
}

const People = ({ people, setPeople, setResetState }: Props) => {
	return (
		<section>
			<h1 className='font-space-mono text-very-dark-cyan dark:text-grayish-cyan-100 dark:opacity-100 opacity-70'>
				Number of People
			</h1>
			<label className='relative flex h-12 p-4 mt-2 overflow-visible rounded-md bg-grayish-cyan-100 dark:bg-[hsl(189,17%,68%)] font-space-mono focus-within:outline focus-within:outline-strong-cyan focus-within:outline-2'>
				<img className='dark:invert' src='/icon-person.svg' alt='icon-dollar' />
				<input
					className='absolute w-1/2 text-xl text-right focus:outline-none bg-inherit text-very-dark-cyan right-5 top-2.5'
					type='number'
					inputMode='numeric'
					name='number-of-people'
					value={people !== 1 ? people : ''}
					onChange={(event) => {
						if (event.target.value) {
							setPeople(parseInt(event.target.value));
							setResetState('');
						} else setPeople(1);
					}}
					onClick={(event) => {
						const target = event.target as HTMLInputElement;
						setPeople(target.value ? parseFloat(target.value) : 1);
						target.select();
					}}
				/>
			</label>
		</section>
	);
};

export default People;
