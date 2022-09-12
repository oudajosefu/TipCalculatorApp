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
  const [resetState, setResetState] = useState('opacity-50 cursor-not-allowed');
  const [customChecked, setCustomChecked] = useState(false);

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

      <main className="flex flex-col justify-start select-none md:min-h-screen lg:items-center bg-grayish-cyan-200 dark:bg-gray-600 lg:justify-center">
        <Header height='flex h-12 md:h-36 lg:h-auto lg:-mt-20 hidden md:flex' />
        <div className='flex flex-col gap-4 bg-white dark:bg-grayish-cyan-400 justify-evenly rounded-3xl md:min-h-fit md:rounded-t-3xl p-7 lg:p-11 lg:w-2/3 2xl:w-1/2 lg:rounded-3xl lg:flex-row lg:mt-16 lg:h-1/2 lg:gap-11'>
          <div className='flex flex-col flex-auto gap-2 justify-evenly'>
            <Bill bill={bill} setBill={setBill} setResetState={setResetState} />
            <Tips tipPercent={tipPercent} customChecked={customChecked} handleClick={{ setTipPercent, setCustomChecked, setResetState }} />
            <People
              people={people}
              setPeople={setPeople}
              setResetState={setResetState}
            />
          </div>
          <Results
            tip={tipPercent * bill}
            total={bill * (1 + tipPercent)}
            people={people}
            resetState={resetState}
            handleClick={{ setBill, setTipPercent, setCustomChecked, setPeople, setResetState }}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
