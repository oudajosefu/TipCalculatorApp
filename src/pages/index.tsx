import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Bill from '../components/Bill';
import Header from '../components/Header';
import People from '../components/People';
import Results from '../components/Results';
import Tips from '../components/Tips';

const Home: NextPage = () => {
    const [bill, setBill] = useState(0);
    const [tipPercent, setTipPercent] = useState(0);
    const [people, setPeople] = useState(1);
    const [resetState, setResetState] = useState('opacity-50');

    useEffect(() => {
        console.log(
            `$${bill} with ${tipPercent * 100
            }% tip split between ${people} people`
        );
    }, [bill, tipPercent, people]);

    return (
        <>
            <Head>
                <title>Tip Calculator</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel='apple-touch-icon' href='/apple-icon.png' />
            </Head>

            <main className="grid min-h-screen grid-rows-[auto_1fr] lg:flex lg:flex-col lg:items-center bg-grayish-cyan-200 lg:justify-center">
                <Header height='hidden md:flex h-36 lg:h-auto lg:-mt-20' />
                <div className='flex flex-col justify-between min-h-screen bg-white md:min-h-fit md:rounded-t-3xl p-7 lg:p-11 lg:w-2/3 2xl:w-1/2 lg:rounded-3xl lg:flex-row lg:mt-16 lg:h-1/2 lg:gap-11'>
                    <div className='flex flex-1 justify-evenly flex-col lg:justify-between'>
                        <Bill setBill={setBill} setResetState={setResetState} />
                        <Tips setTipPercent={setTipPercent} />
                        <People
                            setPeople={setPeople}
                            setResetState={setResetState}
                        />
                    </div>
                    <Results
                        tip={tipPercent * bill}
                        total={bill * (1 + tipPercent)}
                        people={people}
                        resetState={resetState}
                        handleClick={{ setBill, setPeople }}
                    />
                </div>
            </main>
        </>
    );
};

export default Home;
